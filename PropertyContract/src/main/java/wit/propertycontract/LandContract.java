/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package wit.propertycontract;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Anfal
 */
public class LandContract implements SmartContract
{

    public String superAdmin;

    Map<String, List<String>> villageAdminMap = new HashMap<>(); //village to list of admins
    Map<String, Property> propertyMap = new HashMap<>();         //surveyNo.to property
//    ArrayList<Property> history= new ArrayList<>();
    Map<String, List<Property>> historyMap = new HashMap<>();         //surveyNo.to property array

    @Override
    public void create(Context context, Object... params)
    {
        this.superAdmin = context.msgSender;
    }

    
    //===================================UPDATE METHOD==========================================================//
    @Override
    public void update(Context context, String command, Object... params)
    {
        if (command.equalsIgnoreCase("SETADMIN"))
        {
            String village = (String) params[0];
            String adminAddress = (String) params[1];

            setAdmin(context, village, adminAddress);
        } else if (command.equalsIgnoreCase("ADDPROPERTY"))
        {
            String surveyNo = (String) params[0];
            String ownerAddress = (String) params[1];
            String village = (String) params[2];
            String district = (String) params[3];
            String state = (String) params[4];
            int marketValue = (int) params[5];

            Property p = new Property(surveyNo, ownerAddress, village, district, state, marketValue);

            addProperty(context, p);

        } else if (command.equalsIgnoreCase("MAKEAVAILABLE"))
        {
            String surveyNo = (String) params[0];
            makeAvailable(context, surveyNo);

        } else if (command.equalsIgnoreCase("REQTOOWNER"))
        {
            String surveyNo = (String) params[0];
            ReqToOwner(context, surveyNo);

        } else if (command.equalsIgnoreCase("RSBYOWNER"))
        {
            String surveyNo = (String) params[0];
            RequestStatus status = RequestStatus.valueOf((String) params[1]);
            RSbyOwner(context, surveyNo, status);

        } else if (command.equalsIgnoreCase("RSBYADMIN"))
        {
            String surveyNo = (String) params[0];
            RequestStatus status = RequestStatus.valueOf((String) params[1]);
            RSbyAdmin(context, surveyNo, status);

        } else if (command.equalsIgnoreCase("BUYPROPERTY"))
        {
            String surveyNo = (String) params[0];
            buyProperty(context,surveyNo);

        }

    }
    
    
    
//===================================QUERY METHOD==============================================================//
    @Override
    public Object query(Context context, String command, Object... params)
    {
        if (command.equalsIgnoreCase("GETADMIN"))
        {
            String village = (String) params[0];

            return getAdmin(context, village);
        } else if (command.equalsIgnoreCase("GETPROPERTY"))
        {
            String surveyNo = (String) params[0];

            return getProperty(context, surveyNo);
        } else if (command.equalsIgnoreCase("VIEWREQUEST"))
        {
            String surveyNo = (String) params[0];

            return viewRequest(context, surveyNo);
        }
        else if (command.equalsIgnoreCase("VIEWHISTORY"))
        {
            String surveyNo = (String) params[0];
            return viewHistory(context,surveyNo);
        }
        throw new RuntimeException("Unknown command " + command);
    }
    
    
    
//===================================METHODS==========================================================//
    private void setAdmin(Context context, String village, String adminAddress)
    {
        if (!superAdmin.equals(context.msgSender))
        {
            throw new RuntimeException("Must be super administrator to set admin");
        }

        List<String> adminList = villageAdminMap.get(village);
        if (adminList == null)
        {
            adminList = new ArrayList<>();
            villageAdminMap.put(village, adminList);
        }
        adminList.add(adminAddress);
    }

    private Object getAdmin(Context context, String village)
    {
        if (!superAdmin.equals(context.msgSender))
        {
            throw new RuntimeException("Must be super administrator to set admin");
        }

        return villageAdminMap.get(village);
    }

    private Object getProperty(Context context, String surveyNo)
    {
        return propertyMap.get(surveyNo);
    }

    private void addProperty(Context context, Property p)
    {
        String village = p.village;
        List<String> adminList = villageAdminMap.get(village);

        String sender = context.msgSender;

        if (!adminList.contains(sender))
        {
            throw new RuntimeException("Must be administrator of village " + village + " to add property");
        }

        propertyMap.put(p.surveyNo, p);
        
        List<Property> list=historyMap.get(p.surveyNo);
        if(list==null)
        {
            list=new ArrayList<>();
            historyMap.put(p.surveyNo,list);
        }
        list.add(p);
    }

    private void makeAvailable(Context context, String surveyNo)
    {
        String ownerAddress = (String) propertyMap.get(surveyNo).ownerAddress;
        if (!ownerAddress.equals(context.msgSender))
        {
            throw new RuntimeException("Must be owner to make it avalaible");
        }
        propertyMap.get(surveyNo).isForSell = true;

    }

    private void ReqToOwner(Context context, String surveyNo)
    {
        if (true != propertyMap.get(surveyNo).isForSell)
        {
            throw new RuntimeException("Property is not for sell....");
        }
        propertyMap.get(surveyNo).requesterAddress.add(context.msgSender);
    }

    private Object viewRequest(Context context, String surveyNo)
    {
        String ownerAddress = (String) propertyMap.get(surveyNo).ownerAddress;
        if (!ownerAddress.equals(context.msgSender) || !superAdmin.equals(context.msgSender))
        {
            throw new RuntimeException("Only admin & owner can see it");
        }
        return propertyMap.get(surveyNo).requesterAddress;
    }

    private void RSbyOwner(Context context, String surveyNo, RequestStatus status)
    {
        String ownerAddress = (String) propertyMap.get(surveyNo).ownerAddress;
        if (!ownerAddress.equals(context.msgSender))
        {
            throw new RuntimeException("only onwer allowed!!!!");
        }
        propertyMap.get(surveyNo).RSbyOwner = status;
    }

    private void RSbyAdmin(Context context, String surveyNo, RequestStatus status)
    {
        String village = (String) propertyMap.get(surveyNo).village;
        if(!villageAdminMap.get(village).equals(context.msgSender)){
            throw new RuntimeException("only Admin allowed!!!!");
        }
        propertyMap.get(surveyNo).RSbyAdmin = status;
    }

    private void buyProperty(Context context, String surveyNo)
    {
        String ownerAddress = (String) propertyMap.get(surveyNo).ownerAddress;
        
        if (propertyMap.get(surveyNo).requesterAddress.contains(context.msgSender)) //to check buyer is from requesterList
        {
            throw new RuntimeException("You r not from RequesterList, Go make request first");
        }
        if(propertyMap.get(surveyNo).RSbyOwner!=RequestStatus.APPROVED && propertyMap.get(surveyNo).RSbyAdmin!=RequestStatus.APPROVED){
            throw new RuntimeException("Your request is not approved ");
        }
        historyMap.get(surveyNo).add(propertyMap.get(surveyNo)); //add to history
        
        propertyMap.get(surveyNo).ownerAddress=context.msgSender;
        propertyMap.get(surveyNo).isForSell=false;
        propertyMap.get(surveyNo).RSbyOwner=RequestStatus.DEFAULT;
        propertyMap.get(surveyNo).RSbyAdmin=RequestStatus.DEFAULT;
               
    }

    private Object viewHistory(Context context, String surveyNo)
    {
       String village = (String) propertyMap.get(surveyNo).village;
        if(!villageAdminMap.get(village).equals(context.msgSender)){
            throw new RuntimeException("only Admin allowed!!!!");
        }
        return null;
    }
    
    
}

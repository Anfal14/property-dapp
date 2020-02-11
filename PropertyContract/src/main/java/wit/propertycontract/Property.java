/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package wit.propertycontract;

import java.io.Serializable;
import java.util.ArrayList;

/**
 *
 * @author Anfal
 */
public class Property implements Serializable
{

    private static final long serialVersionUID = 0x899734L;

    public String surveyNo;
    public String ownerAddress;
    public String village;
    public String state;
    public String district;
    
    public int marketValue;
    public boolean isForSell;
    
    public ArrayList<String> requesterAddress;
    
    public RequestStatus RSbyOwner;
    public RequestStatus RSbyAdmin;
        
    //...

    public Property()
    {
    }

    public Property(String surveyNo, String ownerAddress, String village, String state, String district, int marketValue)
    {
        this.surveyNo = surveyNo;
        this.ownerAddress = ownerAddress;
        this.village = village;
        this.state = state;
        this.district = district;
        this.marketValue = marketValue;
    }

   
   
}

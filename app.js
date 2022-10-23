     // Initialize cart      
     function initcart(){
      cart=[];
      document.getElementById("cart").innerHTML="";

          
  }

  

  // Add item to cart
  function sub(){
       
       var cartitem = {
           "no": "1",
           "drate": 0,
           "dwork": 1,
           "deductamt":0,
          "grosspay" : function gp(){
               return Math.round(this.drate*this.dwork*100)/100;  
             },
          "netpay" : function np(){
            return Math.round(this.grosspay*this.deductamt*100)/100;
          }
          };

        cartitem.no=document.getElementById("empnamec").value;
        cartitem.dwork=document.getElementById("dwork").value;
        cartitem.drate=document.getElementById("drate").value;
        cartitem.deductamt=document.getElementById("deductamt").value;

        console.log(cartitem.no);
        console.log(cartitem.drate);
        console.log(cartitem.dwork);
        console.log(cartitem.deductamt);


         cart.push(cartitem);
        //cart[cart.length]=cartitem;

        
        showcart();

  }

  // Compute Amount per Item
  function computeamount() {
        var q,p,q;
        q = document.getElementById("dwork").value*1;
        p = document.getElementById("drate").value*1;
        q = document.getElementById("deductamt").value*1;

        a = Math.round(q*p*100)/100;  // rounds off to 2 decimal places

        console.log(a);

        document.getElementById("grossspay").value=a;
      
  }    
  
  // Delete item from chart
  function deleteitem(){
      var todelete;
      var itemno;

      itemno=document.getElementById("delitem").value;

      todelete=confirm("Delete item no. "+itemno+"?");

      if (todelete) {

           cart.splice(itemno-1,1);
           showcart();   
      }

  }

  // Show the contents of the cart
  function showcart(){

      var i,l,carttext,totalamount,ln;
      var theader,tbody,tb,tfooter;

  
      // Generate table header;
      theader ="<thead>";
      theader+="<tr>";
      theader+="<th>No.</th>";
      theader+='<th style="text-align:left" >Item</th>';
      theader+="<th>Quantity</th>";
      theader+='<th style="text-align:right">Price</th>';
      theader+="<th>Amount</th>";
      theader+="</tr>";
      theader+="</thead>";
      
      // Generate Table Body
      l = cart.length;
    
      
    //  for (i=0,totalamount=0,carttext="",tbody='<tbody id="cart">';i<l;i++){
      for (i=0,totalamount=0,carttext="",tbody='';i<l;i++){
          ln=i+1;    
          tbody += "<tr>"
              +'<td>'+ln+' </td>'
              +'<td>'+cart[i].item+' </td>'
              +'<td style="text-align:right">'+cart[i].qty+'</td>'
              +'<td style="text-align:right">'+cart[i].price+'</td>'
              +'<td style="text-align:right">'+cart[i].itemamount()+'</td>'                
              +"</tr>";
                     
          totalamount+=cart[i].itemamount();
      

      }

     // tbody += "</tbody>";

      // Generate table footer;
      tfooter ="<tfoot>";
      tfooter+="<tr>";
      tfooter+='<th style="text-align:left">'+cart.length+'</th>';
      tfooter+='<th style="text-align:left">Items</th>';
      tfooter+='<th></th>';
      tfooter+='<th>Total Amount</th>';
      tfooter+='<th style="text-align:right">'+totalamount+'</th>';
      tfooter+="</tr>";
      tfooter+="</tfoot>";

     console.log(theader+tbody+tfooter);
      document.getElementById("cart").innerHTML=
         '<table>'+theader+tbody+tfooter+'</table>';


  }
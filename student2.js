var jsonobj = { "type":"clothes", "number":"2" };
var jsonobj2 = {"type":"clothes", "number":"1"};
//Global variables
companyName = "Clothes Galore";
address = "1234 Fake Street";
phoneNumber = "661-912-0321";
product4 = null;
product5 = null;
cal = new Date();
today = cal.toLocaleString();
cardNum = -1;
var popUpNum = 1;
var popUp = null;

//Functions
function getDate(date)
{
    //month|day|year: hour|minute
    var dateStr = date.toLocaleString();
    var str = "<p align = 'right'>";
    str += "This page was generated on: " + dateStr;
    str += "</p>";
    return str;
}//end getDate

function getHeader2()
{
    var head = "<table bgcolor='Gold' style='width:100%'>";
    //head += "<tr><td colspan='2' align = 'right'>" + getDate() + "</td></tr>";
    head += "<tr><th align='center' colspan='2'><h1>"+companyName+"</h1></th></tr>";
    head += "<tr><td align='center'>"+address+"</td>";
    head += "<td align = 'center'>"+phoneNumber+"</td></tr>";
    head += "</table>";
    return head;
}//end getHeader2

function getFooter2(cName, addy, pNum)
{
    foot = "<table bgcolor='Gold' style='width:100%'>";
    foot += "<tr><td align = 'center'>";
    foot += cName+" | "+addy+" | "+pNum + "</td></tr>";
    foot += "<tr><td align = 'center'> appName: " +navigator.appName;
    foot += " | appVersion: " +navigator.appVersion+ " | ";
    foot += "platform: " +navigator.platform;
    foot += "</td></tr></table>";
    return foot;
}//end getFooter2

function getImage(Product)
{
    if(Product.id == null)
    {
        var nullimg = "http://jfujii.x10host.com/index2/images/001.jpeg"
        return nullimg;
    }
    var imgurl = "http://jfujii.x10host.com/index2/images/"; 
    var produrl = imgurl + Product.id + ".jpeg";

    var img = "<img ID = 'product' SRC='"+produrl+"' >";
    return img;
} // end getImage


function makeLinkBar(Product)
{
    var link = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'> ";
    //</form><!-- Identify your business so that you can collect the payments. --> 
    link += "<input type='hidden' name='business' value='jnfujii@my.canyons.edu'> ";
    //</input><!-- Specify a PayPal Shopping Cart Add to Cart button. --> 
    link += "<input type='hidden' name='cmd' value='_cart'> ";
    link += "<input type='hidden' name='add' value='1'> ";
    //</input></input><!-- Specify details about the item that buyers will purchase. --> 
    link += "<input type='hidden' name='"+Product.name+"' value='"+Product.desc+"'> ";
    link += "<input type='hidden' name='amount' value='3.95'> ";
    link += "<input type='hidden' name='currency_code' value='USD'>";
    //</input></input><!-- Display the payment button. --> 
    link += "<input type='image' name='submit' ";
    link += "src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' ";
    link += "alt='Add to Cart'>";
    link += "<img alt='' width='1' height='1' ";
    link += "src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'> ";
    link += "</form>";
    return link;
} // end MakeLinkBar

function makeMain(Product)
{//if Product is undefined, then put in some error codes
    //else, displays this
    var mainStr = "<table style='width:100%' border=1 cellpadding=10><tr>";
    mainStr += "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>";
    mainStr += "<span id='prod_img'>"+getImage(Product)+"</span></td>";
    mainStr += "<td id='prod_name'>"+Product.name+"</td>";
    mainStr += "<td style='text-align:right' id='prod_id'>"+Product.id+"</td></tr>";
    mainStr += "<tr><td style='text-align:center' colspan=2>";
    mainStr += "<span id='prod_bar'>"+makeLinkBar(Product)+"</span> </td></tr>";
    mainStr += "<tr><td colspan=2 id='prod_desc'>"+Product.desc+"</td></tr>";
    mainStr += "</table>";
    return mainStr;
}//end makeMain

function dealCards()
{
    cardNum = 2;
    var cardTable = "<table style='width:100%' border=1 cellpadding=10><tr>";
    cardTable += "<td><img id='card0' src=''></td>";
    cardTable += "<td><img id='card1' src=''></td>";
    cardTable += "<td><img id='card2' src='https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif'></td>";
    cardTable += "<td><img id='card3' src='https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif'></td>";
    cardTable += "<td><img id='card4' src='https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif'></td>";
    cardTable += "</tr></table>";
    document.getElementById("card0").src = addCard();
    document.getElementById("card1").src = addCard();
    return cardTable;
} // end dealCards

 function addCard()
 {
    imgNum = "card" + cardNum;
    imgURL = 'https://college1.com/classes/cs190/lecture/images'; 
    whichcard = Math.floor(Math.random() * 1000) % 52;  
    imagesrc = imgURL + "/cards/gbCard" + whichcard + ".gif"; 
    while(document.getElementById("card0").src == imagesrc || document.getElementById("card1").src == imagesrc || document.getElementById("card2").src == imagesrc || document.getElementById("card3").src == imagesrc || document.getElementById("card4").src == imagesrc)
    {
        imagesrc = addCard();
    }
    return imagesrc;
 }//end addCard

 function hitCard()
 {
    if(cardNum < 5 && cardNum != -1)
    {
        var cardHTML = addCard();
        card = "card"+cardNum;
        document.getElementById(card).src = cardHTML;
        cardNum++;
    }
    else if(cardNum == -1)
        alert("Blackjack cannot hit when the cards are not on the screen. Please click \"Deal Cards\" then try again!");
    else
        alert("The maximum number of cards allowed have already been distributed");
 }//end hitCard

 function popupAd(str)
 {
     if(str == "")
     {
        if(popUpNum == 1)
        {
            popUp = open("", "Sweater Ad", "height=550,width=550");
            popUp.document.writeln("<span id = 'my_popup'></span>");
            popUp.document.close();
            popUp.focus();
            popUp.document.getElementById("my_popup").innerHTML = makeSweaterAd();
            popUpNum++;
        }
        else if(popUpNum == 2)
        {
            popUp = open("", "Boots Ad", "height=350,width=350");
            popUp.document.writeln("<span id = 'my_popup'></span>");
            popUp.document.close();
            popUp.focus();
            popUp.document.getElementById("my_popup").innerHTML = makeBootAd();
            popUpNum++;
        }
        else
        {
            popUp = open("", "Shirt Ad", "height=650,width=650");
            popUp.document.writeln("<span id = 'my_popup'></span>");
            popUp.document.close();
            popUp.focus();
            popUp.document.getElementById("my_popup").innerHTML = makeShirtAd();
            popUpNum = 1;
        }
    }
    else
    popUp.close();
 }// end popupAd

 

 function makeSweaterAd()
 {
     var ad = "<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=fuchsia>";
     ad += "<TR><TD>";
     ad += "<H1 ALIGN=CENTER>Check out our sweaters!<br> Click on product #1</H1>";
     ad += "</TD></TR>";
     ad += "</TABLE>";
     return ad;
 }//end makeSweaterAd

 function makeBootAd()
 {
    var ad = "<TABLE WIDTH=200 HEIGHT=200 BGCOLOR=aqua>";
    ad += "<TR><TD>";
    ad += "<H1 ALIGN=CENTER>Boot sale! (Not really) <br> Click on product #2</H1>";
    ad += "</TD></TR>";
    ad += "</TABLE>";
    return ad;
 }//makeBootAd

 function makeShirtAd()
 {
    var ad = "<TABLE WIDTH=400 HEIGHT=100 BGCOLOR=orange>";
    ad += "<TR><TD>";
    ad += "<H1 ALIGN=CENTER>Shirts! Shirts! Shirts! Shirts! Shirts! Shirts!<br> EVERYBODY Click on product #3!</H1>";
    ad += "</TD></TR>";
    ad += "</TABLE>";
    return ad;
 }//end makeshirtad

 function makeForm()
 {
    var form = "<form onSubmit='return checkForm()' name='customerform' action='https://college1.com/classes/javascript/survey.php' method='post'> ";
    form += "<imput type='hidden' name='send_email' value='jnfujii@my.canyons.edu'>";
    form += "<table width=100% border=1> ";
    form += "<tr><td>First Name: <input type='text' name='firstname'></td> ";
    form += "<td align=right> Last Name: <input type='text' name='lastname'></td></tr>"; 
    form += "<tr><td colspan=2>Address: <input type='text' name='address' size =50></td></tr> ";
    form += "<tr><td>City: <input type='text' name='city'></td> ";
    form += "<td align=right>State: <input type='text' name='state' size=3> "; 
    form += "Zip: <input type='text' name='zip' size=6></td> ";
    form += "<tr><td colspan=2>Email Address: <input type='text' name='emailaddr' size=50> ";
    form += "</td></tr><tr><td><input type='submit' value='Submit'></td>"; 
    form += "<td align=right><input type='reset'></td></tr></table></form>";
    return form;
 }//end makeForm

 function checkForm()
 {
     var str = "";
    if(document.customerform.firstname.value.length <= 0)
        str += "Please enter a value for First Name!\n";
    if(document.customerform.lastname.value.length <= 0)
        str += "Please enter a value for Last Name!\n";
    if(document.customerform.address.value.length <= 0)
        str += "Please enter a value for Address!\n";
    if(document.customerform.city.value.length <= 0)
        str += "Please enter a value for City!\n"
    if(document.customerform.state.value.length <= 0)
        str += "Please enter a value for State!\n";
    if(document.customerform.zip.value.length <= 0)
        str += "Please enter a vlue for Zip!\n";
    if(document.customerform.emailaddr.value.length <= 0)
        str += "Please enter a value for Email Address!\n";

     if(str.length > 0)
     {
         alert("There appear to be some errors: \n" + str);
         return false;
     }
     else
        return true;
        
 }//end checkForm

 function getProduct(jsonobj) { 
    // server program calls a function named myFunc 
    var server = 'http://college1.com/classes/cs190/getproduct2.php';   
    var jsonstr = JSON.stringify(jsonobj);           // This is a string in JSON format 
    var s = document.createElement("script"); 
     
    document.body.appendChild(s); 
    var s = document.createElement("script"); 
    s.src = server + "?jsonstr=" + jsonstr; 
    document.body.appendChild(s); 
  }//end getProduct 

  function myFunc(myObj) {   //required function, getproduct2.php will call it 
    //console.log(JSON.stringify(myObj));   // AND pass a JSON OBJECT to it 
    if (product4 == null)  
      product4 = myObj; 
    else 
      product5 = myObj; 
  }//end myFunc
  
  function makeMenu(size)
{
    var menu = "";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeMain(Sweater)'>Product #1 </button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeMain(Boots)'>Product #2 </button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeMain(Shirt)'>Product #3 </button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeMain(product4)'>Product #4</button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeMain(product5)'>Product #5</button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = dealCards()'>Deal Cards</button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = hitCard()'>Hit Card</button>";
    menu += "<button type='button' onclick=popupAd(\"\")>Popup Ad</button>";
    menu += "<button type='button' onclick=popupAd(\"close\")>Close Ad</button>";
    menu += "<button type='button' onclick='document.getElementById(\"my_main\").innerHTML = makeForm()'>Enter Data</button>";
    menu += "<br>";
    return menu;
}//end makeMenu


//Global variables
companyName = "Clothes Galore";
address = "1234 Fake Street";
phoneNumber = "661-912-0321";
cal = new Date();

//Functions
function getHeader2()
{
    //STILL NEED TO ADD THE DATE
    var head = "<table bgcolor='Gold' style='width:100%'>";
    head += "<tr><th align='center' colspan='2'>"+companyName+"</th></tr>";
    head += "<tr><td align='center'>"+address+"</td>";
    head += "<td align = 'center'>"+phoneNumber+"</td></tr>";
    head += "</table>";
    return head;
}//end getHeader2

function getFooter2(cName, addy, pNum)
{
    foot = "<table bgcolor='Gold' syle='width:100%'>";
    foot += "<tr><td align = 'center'>";
    foot += cName+" | "+addy+" | "+pNum+ " | appName: " +navigator.appName;
    foot += " | appVersion: " +navigator.appVersion+ " | ";
    foot += "platform: " +navigator.platform;
    foot += "</td></tr></table>";
    return foot;
}//end getFooter2

function getDate()
{
    var date = "<p align='right'>";
    date += "This page was loaded at: " + cal.toLocaleString();
    date += "</p>";
}//end getDate

function makeMenu(size)
{
    var menu = "";
    for(var i = 0; i < size; i++)
    {
        menu += "Menu <br>";
    }
    return menu;
}//end makeMenu

function makeMain(Product)
{
    var mainStr = "<table style='width:100%' border=1 cellpadding=10><tr>";
    mainStr += "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>";
    mainStr += "<span id='prod_img'>Product Image</span></td>";
    mainStr += "<td id='prod_name'>"+Product.name+"</td>";
    mainStr += "<td style='text-align:right' id='prod_id'>"+Product.id+"</td></tr>";
    mainStr += "<tr><td style='text-align:center' colspan=2>";
    mainStr += "<span id='prod_bar'>Shopping Cart Link Bar</span> </td></tr>";
    mainStr += "<tr><td colspan=2 id='prod_desc'>"+Product.desc+"</td></tr>";
    mainStr += "</table>";
    return mainStr;

}//end makeMain

/*function getFooter(cName, addy, pNum)
{
    footer = "<table style = 'width:100%' bgcolor='Gold'><tr>";
    footer += "<td style = 'width:33%'><b style = 'text-align: center'>" +cName+ "</b></td>";
    footer += "<td style = 'width:33%'><p style = 'text-align: center'>" +addy+ "</p></td>";
    footer += "<td style = 'width:33%'><p style = 'text-align: center'>" +pNum+ "</p></td>";
    footer += "</td></tr></table>";
    return footer;
}//end GetFooter*/

/*function getHeader()
{
    cal = new Date();
    var header = "<table style = 'width:100%'>";
    header += "<tr><td style = 'width:100%'><p style = 'text-align: right'> This page was loaded at: "+cal.toLocaleString()+ "</p></td></tr>";
    header += "<tr style = 'background-color:Gold'>";
    header += "<td style = 'witdh:100%'><h1 style = 'text-align:center'>"+companyName+"</h1></td></tr>";
    header += "<tr style = 'background-color:Gold'>"
    header += "<td style = 'width:50%'><p style = 'text-align: center'>"+address+"</p></td>";
    header += "<td style = 'width:50%'><p style = 'test-align: center'>"+phoneNumber+"</p></td></tr>";
    header += "</table>";
    return header;
}//end GetHeader*/
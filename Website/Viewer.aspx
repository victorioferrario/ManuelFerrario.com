<%@ Page Language="C#" %>

<!DOCTYPE html>
<script runat="server">
   protected void Page_Load(object sender, EventArgs e)
  {
    if (!String.IsNullOrEmpty(Request.QueryString["id"]))
    {            
      Response.Redirect(Request.QueryString["id"]);
    }
    else {
      this.placeholderOutput.Controls.Add(new LiteralControl("No id provided"));     
    }
  } 
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:PlaceHolder ID="placeholderOutput" runat="server" />
        </div>
    </form>
</body>
</html>

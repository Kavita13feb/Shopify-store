//https://06e1269a59e50e1b620406caad0e9e11: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@discountshoppy.in/admin/api/2023-04/orders.json

//https://{store_name}.myshopify.com/admin/api/2023-04/{resource}.json

// -H 'Content-Type: application/json' \
// -H 'X-Shopify-Access-Token: {password}'
// https://discoutshoppy-in.myshopify.com/admin/api/2023-04/orders.json


##
- // https://shopbag.onrender.com/posts
- api call through request
 request({
      'method':'GET',
      'url':`https://${process.env.shop}/admin/api/2023-04/shop.json`,
      'headers':{
             'Content-Type': 'application/json',
             'X-Shopify-Access-Token': `${pass}`
           }
     },(err,responce)=>{
      if(err) throw new Error(err)
      res.send(responce.body)
  })


###
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}​



#### updates
    <div id="role">
      <h3><input type="radio" name="role" value="customer" checked> Customer</h3>
      <h3><input type="radio" name="role" value="merchant"> Merchant</h3>
    </div>

    <div class="field">
      <input
        type="text"
        name="customer[sponsor_id]"
        id="RegisterForm-sponsor_id"
        {% if form.sponsor_id %}
          value="{{ form.sponsor_id }}"
        {% endif %}
        autocomplete="given-name"
        placeholder="Sponsor id"
        value=""
    disabled=true
      >
    </div>
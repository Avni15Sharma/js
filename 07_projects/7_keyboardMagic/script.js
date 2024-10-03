const newdiv=document.createElement("div")

window.addEventListener("keydown",function(e){
newdiv.innerHTML=`<table>
<tr>
  <th>Key</th>
  <th>Keyname</th>
  <th>Keycode</th>
</tr>
<tr>
  <td>${e.key===" "? "space":e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>
</table>`;
    document.querySelector("#insert").appendChild(newdiv)
});
/* I've tried to separate JavaScript, but it did'n work...

<script type="text/javascript">
function changeLanguage(lang) {
    document.getElementById("content").innerHTML = document.getElementById(lang).innerHTML;
}

</script>
<script type="text/javascript">
document.getElementById("content").innerHTML = document.getElementById("english").innerHTML;
</script>

*/

function changeLanguage(lang) {
    document.getElementById("content").innerHTML = document.getElementById(lang).innerHTML;
}

<script lang="ts">
import Pusher from "pusher-js"
import {PUBLIC_PUSHER_APP_KEY} from "$env/static/public"

var pusher = new Pusher(PUBLIC_PUSHER_APP_KEY, {
    cluster: "us3"
})
var channel = pusher.subscribe("c")
channel.bind("e", (d) => {
    console.log(d)
})
</script>

<div>
    {PUBLIC_PUSHER_APP_KEY}
</div>
import { buildConfig } from "payload/config";

export default buildConfig({
    serverURL:process.env.NEXT_PUBILC_SERVER_URL||'',
    collections:[],
    routes:{
        admin:'/sell'
    },
    admin:{

    },
    editor:slateEditor({
        
    })
})
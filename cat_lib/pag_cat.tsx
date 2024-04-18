import { CatClient } from "ccat-api"

export default function Home() {
    const cat = new CatClient({
        //baseUrl: 'localhost',
        baseUrl: process.env.CAT_CORE_HOST || "",
        
        //... other settings

        cat.send('Hello my friend!');

        cat.onConnected(() => {
            console.log('Socket connected')
        }).onMessage(msg => {
            console.log(msg)
        }).onError(err => {
            console.log(err)
        }).onDisconnected(() => {
            console.log('Socket disconnected')
        })

    });
    return (
        <main>
            <div>Ciao</div>
        </main>
    );

}

export default  async function Page({params}: {params: {memid: string , memname: string, memage: string}}) {
    const { memid, } = await params;
    return (
        <div>
            <h1>Member Normal Page</h1>
            <h1>Member ID: {memid}</h1>
            

        </div>
    );
}

//basic Routing = /products
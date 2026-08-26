export default  async function Page({params}: {params: {memid: string, memname: string, memage: string}}) {
    const { memid, memname, memage } = await params;
    return (
        <div>
            <h1>Member VIP Page</h1>
            <h1>Member ID: {memid}</h1>
            <h1>Member Name: {memname}</h1>
            <h1>Member Age: {memage}</h1>
        </div>
    );
}

//basic Routing = /products
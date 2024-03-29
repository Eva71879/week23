import Card from "./Card";

function CardList() {

    const biggerCardIndex = true;

    return (
        <>
        <Card title='300' price='300' speed='10' headerColor='#1f9eae' mainColor='#2ac3d6'/>
        <Card title='450' price='450' speed='50' headerColor='#198b74' mainColor='#22b18f'/>
        <Card title='550' price='550' speed='100'
        headerColor='#c5544d' mainColor='#f46a5f' isBigger={biggerCardIndex}/>
        <Card title='1000' price='1000' speed='200'
        headerColor='#232b34' mainColor='#303742'/>
        </>
    )
}

export default CardList;
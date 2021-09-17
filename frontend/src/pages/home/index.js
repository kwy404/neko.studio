import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 60px;
    position: sticky;
    top: 20px;
    background: #000;
    border-bottom: 2px solid #151515;
    box-shadow: 1px 2px 3px #151515;
`

const Input = styled.div`
    width: 400px;
    height: auto;
    background: white;
    margin-left 8px;
    top: 10px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 50px;
    i{
        background: var(--purple);
        color: white;
        padding: 10px;
        padding-left: 15px;
    }
    input {
        position: absolute;
        border: none;
        top: 8px;
        padding-left: 4px;
        margin-left: 0px;
        outline: none;
        width: calc(100% - 35px);
        padding-bottom: 7px;
        border-bottom: 4px solid var(--purpleLow);
        :focus{
            border-bottom: 4px solid var(--purple);
        }
    }
`

const Home = () => {
    return <>
        <Header>
            <Input>
                <i className="fas fa-search"></i>
                <input/>
            </Input>
        </Header>
    </>
}

export default Home;
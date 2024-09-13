import OpcoesHeader from '../../componentes/OpcoesHeader/OpcoesHeader';
import Logo from '../../componentes/Logo/Logo';
import IconesHeader from '../../componentes/IconesHeader/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;
import Image from 'next/image';
import LOGO_IMG from '../../../../public/kao_oboerarenai_man.png'
import styled from 'styled-components'
/**
 * ロゴ
 */
const Span = styled.span`
    margin: 5px 10px 5px 10px;
`;

const AppLogo = () => (
    <Span>
        <Image
            src={LOGO_IMG}
            alt="Vercel Logo"
            width={100}
            height={100}
        />
    </Span>
);

export default AppLogo;

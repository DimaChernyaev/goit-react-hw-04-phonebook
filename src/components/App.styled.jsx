import styled from '@emotion/styled';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ghostwhite;
`;

export const TitlePhonebook = styled.h2`
    font-size: 28px;
    color: black;
    margin-bottom: 12px;
`;

export const TitleContactList = styled.h2`
    font-size: 24px;
    color: black;
    margin-bottom: 12px;
`;

export const ContactsContainer = styled.div`
    padding: 12px;
    background: rgba(176, 230, 237, 0.5);
    border-radius: 8px;
`;

export const NullContactsMessage = styled.p`
    font-size: 18px;
    color: black;
    text-align: center;
`;
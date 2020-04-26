import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MdFilterList, MdViewModule, MdViewList, MdCreateNewFolder, MdSearch } from 'react-icons/md';
// import logo from '../../common/images/logo.svg';

let MenuComponent: FunctionComponent = () => {

  return (
    <Header>
      <PageTitle>Assets</PageTitle>

      <ActionContainer>

        <ActionGroup>
          <Action>
            <MdSearch />
          </Action>
        </ActionGroup>

        <ActionGroup>
          <Action>
            <MdFilterList />
          </Action>
          <Action>
            <MdViewModule />
          </Action>
          <Action>
            <MdViewList />
          </Action>
        </ActionGroup>

        <ActionGroup>
          <Action>
            <MdCreateNewFolder />
          </Action>
        </ActionGroup>

      </ActionContainer>
    </Header>
  );
}

export default MenuComponent;

const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const PageTitle = styled.h1`
  font-size: 32px;
`;
const ActionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  height: 100%;
  width: auto;
`;
const ActionGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;
const Action = styled.a`
  font-size: 18px;
  background-color: #282A2F;
  color: #E8E7EC;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1px;
  cursor: pointer;
`;
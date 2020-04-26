import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import { MdExpandMore, MdMoreHoriz } from 'react-icons/md';
import Header from '../../components/Header'

let AssetsPage: FunctionComponent = () => {

  return (
    <Fragment>
      <Header />

      <AppMain>
        <TypeInfo>
          <TypeFilter>All Types<TypeExpand /></TypeFilter>
          <TypeCount>11 <span>of</span> 213 <span>Assets</span></TypeCount>
        </TypeInfo>

        <AssetContainer>
            <AssetWrapper>
              <Asset type={'song'} >
                <AssetMeta>
                  <AssetType>Song</AssetType>
                  <AssetMenu />
                </AssetMeta>

                <AssetTitle>Fíjate Que Sí (Versión Mariachi)</AssetTitle>
              </Asset>
            </AssetWrapper>

            <AssetWrapper>
              <Asset type={'album'} >
                <AssetMeta>
                  <AssetType>Album</AssetType>
                  <AssetMenu />
                </AssetMeta>

                <AssetTitle>Fíjate Que Sí (Versión Mariachi)</AssetTitle>
              </Asset>
            </AssetWrapper>
        </AssetContainer>
      </AppMain>
    </Fragment>
  );
}

export default AssetsPage;

const AppMain = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: auto;
`;
const TypeInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 13px;
  margin-bottom: 20px;
`;
const TypeFilter = styled.div`
  margin-right: 12px;
`;
const TypeExpand = styled(MdExpandMore)`
  position: relative;
  top: 2px;
  left: 2px;
`;
const TypeCount = styled.div`
  span {
    color: #5D5C63;
  }
`;

const AssetContainer = styled.div`
  display: grid;
  grid-template: 200px / repeat(12,calc(8.33% - 9.1px));
  grid-gap: 10px 10px;
`;
const AssetWrapper = styled.article`
  grid-column: span 2;
  grid-row: span 1;
`;
const Asset: any = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #25262B;
  padding: 20px 10px 20px 18px;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2B2A30;
    width: 8px;
    height: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    background-color: ${({ type }: any) => type === 'song' ? '#7CB2C5' : '#D8957B'};
    width: 4px;
    height: 20px;
  }
`;
const AssetMeta = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const AssetType = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const AssetMenu = styled(MdMoreHoriz)`
  font-size: 24px;
  color: #5D5C63;
  height: 20px;
`;
const AssetTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;
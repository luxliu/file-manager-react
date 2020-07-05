import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Input, Breadcrumb as AntBreadcrumb } from 'antd';

export const Container = styled.div`
  display: flex;
  padding-top: 50px;
  color: #333333;
`;

export const Wrapper = styled.div`
  width: 538px;
  border-radius: 24px;
  box-shadow: 1px 1px 16px 0 rgba(0, 0, 0, 0.05);
  padding: 24px;
  background-color: #ffffff;
  margin: auto;
`;

export const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const CloseIcon = styled(CloseOutlined)`
  cursor: pointer;
  color: #666666;
`;

export const ButtonFunctionWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;

  button {
    margin-right: 12px;
  }

  img {
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const GroupIconWrapper = styled.div`
  margin-left: auto;
`;

export const SearchBar = styled(Input)`
  height: 32px;
  margin-bottom: 21px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding-right: 3px;
`;

export const SearchIconWrapper = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  stroke-width: 20px;
  stroke: #7d7d7d;
`;

export const Breadcrumb = styled(AntBreadcrumb)`
  color: #999999;
  margin-bottom: 16px;
  font-size: 13px;
`;

export const BreadcrumbItem = styled(AntBreadcrumb.Item)`
  margin-right: 4px;
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  margin-bottom: 30px;

  button {
    margin-left: 12px;
  }
`;

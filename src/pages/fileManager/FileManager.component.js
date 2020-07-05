import React, { useState } from 'react';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';

import { FileItemList } from './components/FileItemList.component';
import { Button } from '../../components/button';
import * as Styled from './fileManager.styled';
import file1 from '../../assets/images/fileImg-1.svg';
import file2 from '../../assets/images/fileImg-2.svg';
import file3 from '../../assets/images/fileImg-3.svg';
import newFolderIcon from '../../assets/images/new-folder-button.svg';
import uploadIcon from '../../assets/images/upload-button.svg';
import listGroupIcon from '../../assets/images/Group-1.svg';
import gridGroupIcon from '../../assets/images/Group-2.svg';

const fileItems = [
  {
    uid: '1',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file1,
  },
  {
    uid: '2',
    name: 'Global-Peace-Index….pdf',
    date: '2020-12-16',
    owner: 'Honey Meada',
    Access: 'Full access',
    img: file2,
  },
  {
    uid: '3',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '4',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '5',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '6',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '7',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '8',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '9',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '10',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '11',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
  {
    uid: '12',
    name: 'Sotirea-sianlaisen.png',
    date: '2020-12-16',
    owner: 'User Name',
    Access: '',
    img: file3,
  },
];

export const FileManager = (props) => {
  const [selectedFileItem, setSelectedFileItem] = useState(null);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TitleWrapper>
          <span>{intl.get('page.fileManager.Title').d('FILES')}</span>
          <Styled.CloseIcon />
        </Styled.TitleWrapper>
        <Styled.ButtonFunctionWrapper>
          <Button light="true">
            <img src={newFolderIcon} alt="newFolderIcon" />
            New folder
          </Button>
          <Button light="true">
            <img src={uploadIcon} alt="uploadIcon" />
            Upload
          </Button>
          <Styled.GroupIconWrapper>
            <img src={listGroupIcon} alt="listGroupIcon" />
            <img src={gridGroupIcon} alt="gridGroupIcon" />
          </Styled.GroupIconWrapper>
        </Styled.ButtonFunctionWrapper>
        <Styled.SearchBar
          suffix={
            <Styled.SearchIconWrapper>
              <SearchOutlined />
            </Styled.SearchIconWrapper>
          }
        />
        <Styled.Breadcrumb separator={<RightOutlined />}>
          <Styled.BreadcrumbItem href="">My files</Styled.BreadcrumbItem>
          <Styled.BreadcrumbItem href="">
            Folder namel ni;a ssseifna nei
          </Styled.BreadcrumbItem>
          <Styled.BreadcrumbItem>
            Folder namel ni;a iainainfi
          </Styled.BreadcrumbItem>
        </Styled.Breadcrumb>
        <FileItemList
          fileItems={fileItems}
          selectedFileItem={selectedFileItem}
          onFileSelected={setSelectedFileItem}
        />
        <Styled.FooterButtonWrapper>
          <Button onClick={() => setSelectedFileItem(null)}>Cancel</Button>
          <Button type="primary" disabled={!selectedFileItem}>
            Copy to this folder
          </Button>
        </Styled.FooterButtonWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

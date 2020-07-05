import React, { useState } from 'react';
import { Dropdown } from 'antd';

import * as Styled from './fileItemList.styled';
import dropDownIcon from '../../../assets/images/dropdown-icon.png';
import * as contextIcon from '../../../assets/images/context-menu-icon';

const contentMenu = (
  <Styled.MenuWrapper>
    <Styled.DropDownTitle>
      <span>All content</span>
      <Styled.ContentCount>6</Styled.ContentCount>
    </Styled.DropDownTitle>
    <Styled.MenuDivider />
    <Styled.MenuItem>
      <Styled.MenuDot color="#1CB5A0" />
      <span>Contacts</span>
    </Styled.MenuItem>
    <Styled.MenuItem>
      <Styled.MenuDot color="#F2C249" />
      <span>Incoming Shares</span>
      <Styled.ContentCount>5</Styled.ContentCount>
    </Styled.MenuItem>
    <Styled.MenuItem>
      <Styled.MenuDot color="#FFA502" />
      <span>Payment</span>
      <Styled.ContentCount>1</Styled.ContentCount>
    </Styled.MenuItem>
    <Styled.MenuItem>
      <Styled.MenuDot color="#D64446" />
      <span>Takedown</span>
    </Styled.MenuItem>
  </Styled.MenuWrapper>
);

const contextMenu = (
  <Styled.ContextMenuWrapper>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg src={contextIcon.aboutIcon} alt="aboutIcon" />
      About
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.megaWebsiteIcon}
        alt="megaWebsiteIcon"
      />
      MEGA website
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.cloudDriveIcon}
        alt="cloudDriveIcon"
      />
      Cloud drive
    </Styled.ContextMenuItem>
    <Styled.MenuDivider />
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.addSyncIcon}
        alt="addSyncIcon"
      />
      Add sync
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.importLinksIcon}
        alt="importLinksIcon"
      />
      Import links
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.uploadIcon}
        alt="uploadIcon"
      />
      Upload
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.downloadIcon}
        alt="downloadIcon"
      />
      Download
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.streamIcon}
        alt="streamIcon"
      />
      Stream
    </Styled.ContextMenuItem>
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg
        src={contextIcon.perferencesIcon}
        alt="perferencesIcon"
      />
      Perferences
    </Styled.ContextMenuItem>
    <Styled.MenuDivider />
    <Styled.ContextMenuItem>
      <Styled.ContextMenuItemImg src={contextIcon.quitIcon} alt="quitIcon" />
      Quite
    </Styled.ContextMenuItem>
  </Styled.ContextMenuWrapper>
);

export const FileItemList = ({
  fileItems,
  selectedFileItem,
  onFileSelected,
}) => {
  const [pressedFileItem, setPressedFileItem] = useState(null);

  return (
    <Styled.Wrapper>
      <Styled.DropDownRow>
        <Styled.ContentCol>
          <Dropdown
            overlay={contentMenu}
            trigger={['click']}
            getPopupContainer={() =>
              document.getElementById('content-dropdown-anchor')
            }
          >
            <Styled.DropDownHeader>
              <span>All content</span>
              <img src={dropDownIcon} alt="dropdown-icon" />
            </Styled.DropDownHeader>
          </Dropdown>
        </Styled.ContentCol>
        <Styled.OwnerCol>
          <Dropdown
            overlay={contentMenu}
            trigger={['click']}
            getPopupContainer={() =>
              document.getElementById('owner-dropdown-anchor')
            }
          >
            <Styled.DropDownHeader>
              <span>Owner</span>
              <Styled.DropDownHeaderCount>12</Styled.DropDownHeaderCount>
              <img src={dropDownIcon} alt="dropdown-icon" />
            </Styled.DropDownHeader>
          </Dropdown>
        </Styled.OwnerCol>
        <Styled.AccessCol>
          <Dropdown
            overlay={contentMenu}
            trigger={['click']}
            getPopupContainer={() =>
              document.getElementById('access-dropdown-anchor')
            }
          >
            <Styled.DropDownHeader>
              <span>Access</span>
              <img src={dropDownIcon} alt="dropdown-icon" />
            </Styled.DropDownHeader>
          </Dropdown>
        </Styled.AccessCol>
      </Styled.DropDownRow>
      <Styled.DropDownRow>
        <Styled.ContentDropdownAnchor>
          <Styled.DropDownAnchor id="content-dropdown-anchor" />
        </Styled.ContentDropdownAnchor>
        <Styled.OwnerDropdownAnchor>
          <Styled.DropDownAnchor id="owner-dropdown-anchor" />
        </Styled.OwnerDropdownAnchor>
        <Styled.AccessDropdownAnchor>
          <Styled.DropDownAnchor id="access-dropdown-anchor" />
        </Styled.AccessDropdownAnchor>
      </Styled.DropDownRow>

      <Styled.ListWrapper>
        {fileItems.map((fileItem) => (
          <Styled.FileListRowWrapper
            key={fileItem.uid}
            selected={selectedFileItem?.uid === fileItem.uid}
            pressed={pressedFileItem?.uid === fileItem.uid}
          >
            <Dropdown
              overlay={contextMenu}
              trigger={['contextMenu']}
              onVisibleChange={(visible) =>
                visible
                  ? setPressedFileItem(fileItem)
                  : setPressedFileItem(null)
              }
            >
              <Styled.FileListRow onClick={() => onFileSelected(fileItem)}>
                <Styled.ContentCol>
                  <Styled.FileImgWrapper>
                    <img src={fileItem.img} alt={fileItem.name} />
                  </Styled.FileImgWrapper>
                  <Styled.FileContentWrapper>
                    <Styled.FileName>{fileItem.name}</Styled.FileName>
                    <Styled.FileDate
                      selected={selectedFileItem?.uid === fileItem.uid}
                    >
                      {fileItem.date}
                    </Styled.FileDate>
                  </Styled.FileContentWrapper>
                </Styled.ContentCol>
                <Styled.OwnerCol>{fileItem.owner}</Styled.OwnerCol>
                <Styled.AccessCol>{fileItem.Access}</Styled.AccessCol>
              </Styled.FileListRow>
            </Dropdown>
          </Styled.FileListRowWrapper>
        ))}
      </Styled.ListWrapper>
    </Styled.Wrapper>
  );
};

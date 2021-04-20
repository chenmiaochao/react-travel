import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
    return (
        <Menu mode='vertical' className={styles["side-menu"]}>
            {sideMenuList.map((m, index) => (
                <Menu.SubMenu
                    key={`side-memu-${index}`}
                    title={<span><GifOutlined />{m.title}</span>}
                >
                    {/* //为什么这里可以直接m.subMenu??? */}
                    {m.subMenu.map((sm, smindex) => (
                        <Menu.SubMenu
                        key={`side-memu-${smindex}`}
                        title={<span><GifOutlined />{sm.title}</span>}
                        >
                            {sm.subMenu.map((sms, smsindex) => (
                                <Menu.Item 
                                    key={`sub-sub-menu-${smsindex}`}
                                >
                                    <span><GifOutlined />{sms}</span>
                                </Menu.Item>

                            ))}
                        </Menu.SubMenu>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    )
}


import { useState, useEffect } from 'react';
import type { DrawerProps, RadioChangeEvent, ColorPickerProps, GetProp } from 'antd';
import { Drawer, ColorPicker, Switch } from 'antd';
// import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setSettingDrawer, setColorPrimary } from '@/store/modules/app.ts';

// type Color = GetProp<ColorPickerProps, 'value'>;

const SettingDrawer = () => {
  const dispatch = useDispatch();
  const { settingOptions } = useSelector((state: any) => state.appStore);
  const [placement, _] = useState<DrawerProps['placement']>('right');
  const onClose = () => {
    dispatch(setSettingDrawer(false))
    setDrawerLoading(true);
  }
  const [drawerLoading, setDrawerLoading] = useState<boolean>(true);
  const openCallback = () => {
    setTimeout(() => {
      setDrawerLoading(false);
    }, 1000);
  }
  return (
    <>
      <Drawer
        title="设置"
        width={369}
        loading={drawerLoading}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={settingOptions.openSetting}
        key={placement}
        afterOpenChange={openCallback}
      >
        <div>
          <span>主题颜色：</span>
          <ColorPicker
          value={settingOptions.themePrimary}
            onChange={(color, hex) => {
            console.log(color, hex);
            dispatch(setColorPrimary(hex))
          }}
          showText
        />
        </div>
        {/* <div>
          <span>主题：</span>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
        </div> */}
      </Drawer>
    </>
  )
}

export default SettingDrawer;
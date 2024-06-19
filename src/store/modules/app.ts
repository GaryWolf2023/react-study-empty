import { createSlice } from '@reduxjs/toolkit'
const appStore = createSlice(
    {
        name: 'app',
        initialState: {
            count: 0,
            colorPrimary: '#fbff00',
            settingOptions: {
                openSetting: false,
                openMenu: false,
                themePrimary: '#fbff00',
                colorBgContainer: '#dadada',
            },
            language: localStorage.getItem('locale') || 'zh-CN',
            localeList: {
                "zh-CN":{lang:'zh-CN', label:'简体中文', flag: ""},
                "zh-HK":{lang:'zh-HK', label:'繁体中文', flag: ""},
                "en-US":{lang:'en-US', label:'English', flag: ""},
            },
            setLocale: false,
        },
        reducers: {
            // 定义actions
            setLanguage(state, action) { state.language = action.payload },
            openSetLocal(state, action) { state.setLocale = action.payload },
            /**
             * =======================================study==========================================
             */
            add(state) { state.count += 1 },
            sub(state) { state.count -= 1 },
            setCount(state, action) { state.count = action.payload },
            setSettingDrawer(state, action) { state.settingOptions.openSetting = action.payload },
            setColorPrimary(state, action) { state.settingOptions.themePrimary = action.payload },
        }
    }
)

// 结构出创建actions对象的函数
const {
    add,
    sub,
    setCount,
    setSettingDrawer,
    setColorPrimary,
    setLanguage,
    openSetLocal,
} = appStore.actions

const appReducer = appStore.reducer

export {
    add,
    sub,
    setCount,
    setSettingDrawer,
    setColorPrimary,
    setLanguage,
    openSetLocal,
}
export default appReducer
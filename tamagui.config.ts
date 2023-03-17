import {config} from '@tamagui/config'
import {createTamagui} from '@tamagui/core'

// if using only @tamagui/core with `react-native` components

// if using `tamagui` this isn't necessary

const appConfig = createTamagui(config)
export type AppConfig = typeof appConfig
declare module '@tamagui/core' {

    // overrides TamaguiCustomConfig so your custom types

    // work everywhere you import `tamagui`

    interface TamaguiCustomConfig extends AppConfig {
    }

}
export default appConfig

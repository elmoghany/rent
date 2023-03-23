import {
    StyleSheet,
    View,
}
    from 'react-native';
import colors from "../../modal/color.js";
import React, { useMemo } from 'react';
import { AssetsSelector } from 'expo-images-picker'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { MediaType } from 'expo-media-library';

const SelectPhotos = () => {
    const navigation = useNavigation();
    const onSuccess = (data: any) => {
        navigation.navigate("Listing", { imageData: data })
    }

    const widgetResize = useMemo(
        () => ({
            // width: 512,
            // height: 384,
            // majorAxis: 512,
            width: 50,
            compress: 0.7,
            base64: false,
            saveTo: "jpeg",
        }),
        []
    )
    const _textStyle = {
        color: "white",
    };

    const _buttonStyle = {
        backgroundColor: "orange",
        borderRadius: 5,
    };

    const widgetNavigator = useMemo(
        () => ({
            Texts: {
                finish: 'finish',
                back: 'back',
                selected: 'selected',
            },
            midTextColor: colors.black,
            minSelection: 1,
            buttonTextStyle: _textStyle,
            buttonStyle: _buttonStyle,
            onBack: () => navigation.navigate("Listing"),
            onSuccess: (e: any) => onSuccess(e),
        }),
        []
    )

    const widgetStyles = useMemo(
        () => ({
            margin: 2,
            bgColor: colors.primary,
            spinnerColor: colors.purple,
            widgetWidth: 99,
            screenStyle: {
                borderRadius: 5,
                overflow: "hidden",
            },
            widgetStyle: {
                margin: 10
            },
            videoIcon: {
                Component: Ionicons,
                iconName: 'ios-videocam',
                color: colors.black,
                size: 20,
            },
            selectedIcon: {
                Component: Ionicons,
                iconName: 'ios-checkmark-circle-outline',
                color: colors.white,
                bg: colors.black,
                size: 26,
            },
        }),
    )

    const widgetErrors = useMemo(
        () => ({
            errorTextColor: colors.purple,
            errorMessages: {
                hasErrorWithPermissions: "Please Allow media gallery permissions.",
                hasErrorWithLoading: "There was error while loading images.",
                hasErrorWithResizing: "There was error while loading images.",
                hasNoAssets: "No images found.",
            },
        }),
        []
    )


    const widgetSettings = useMemo(
        () => ({
            getImageMetaData: false,
            initialLoad: 100,
            assetsType: [MediaType.photo, MediaType.video],
            minSelection: 1,
            maxSelection: 3,
            existingSelectionIds: ["<selected Id 1>", "<selected Id 2>", "<selected Id N>"],
            portraitCols: 4,
            landscapeCols: 4,
        }),
        []
    )


    return (
        <View style={styles.container}>
            <AssetsSelector
                Settings={widgetSettings}
                Errors={widgetErrors}
                Styles={widgetStyles}
                Navigator={widgetNavigator} // optional
            //                Resize={widgetResize}       // optional
            //                CustomNavigator={{          // optional
            //                    Component: CustomNavigator,
            //                    props: {
            //                        backFunction: true,
            //                        onSuccess,
            //                        text: T.ACTIONS.SELECT,
            //                    },
            //                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default SelectPhotos;
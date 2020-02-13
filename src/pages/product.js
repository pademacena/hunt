import React from 'react';

import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
        fontWeight: "bold",
    },
});

export default Product;
import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import * as productActions from "../actionCreators/search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FlatList } from "react-native-gesture-handler";
import { SearchBar, Button } from 'react-native-elements';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
        }
    }
    
    componentDidMount() {
        this.props.actions.getProducts();
        this.props.actions.getSearchProduct(this.props.products, "");
    }

    _keyExtractor(p, i){
        return `${p.id}`;
    }

    _handleClick(item){
        alert('id: '+ item.id + '\n' + 'name: ' + item.title)
    }

    _onSearch(text){
        console.log(text);
        this.setState({name: text});
    }

    _handleSearch(name){
        let filterProduct = this.props.products.filter((fill) => fill.title.toLowerCase().indexOf(name.toLowerCase())> -1);
        this.props.actions.getSearchProduct(filterProduct, name);
    }

    _renderItem = ({item}) => (
    <TouchableOpacity onPress = {() =>this._handleClick(item)}>
        <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        </View>
    </TouchableOpacity>
    );

    render() {
        const { products, isLoading, fillterProducts, items} = this.props;
        // products.map(p => {console.log(p.price)});
        fillterProducts.sort(function(a, b){
            return b.price - a.price;
        }) 
        console.log(isLoading);
        return (
            <View style={styles.container}>
                <SearchBar
                lightTheme
                onChangeText={this._onSearch.bind(this)}
                onClearText={this._onSearch.bind(this)}
                placeholder='Search Products' />
                <Button 
                title = 'Search'
                onPress= {()=>this._handleSearch(this.state.name)}
                buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                  }}/>
                {isLoading ? (
                    <View style={{flex:1, justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="green"/>
                    </View>
                ) :(
                    <FlatList
                    data={fillterProducts}
                    keyExtractor = {this._keyExtractor}
                    renderItem = {this._renderItem}
                    />
                )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        products: state.products,
        fillterProducts: state.fillterProducts,
        item: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
  });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductList);

const mapStateAndProps = connect(
         mapStateToProps,
         mapDispatchToProps
     )

export default mapStateAndProps(ProductList);
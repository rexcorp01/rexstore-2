import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button, FlatList } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

class SellProduct extends Component {
	render() {
		return (
			<TouchableOpacity style={{flex:1, backgroundColor:'#fff', marginHorizontal:3, marginVertical:3}}>
                <Image source={{ uri: this.props.item.image}} style={{width:'100%', height:193}} />
                <View style={{paddingHorizontal:10, paddingVertical:8}}>
                    <Text numberOfLines={2} style={{fontSize:15}}>{this.props.item.title}</Text>
                </View>
                <View style={{paddingHorizontal:10, paddingBottom:10}}>
                    <Text numberOfLines={2} style={{fontSize:16, color:'#EE4D2D'}}>Rp {this.props.item.price}</Text>
                </View>
            </TouchableOpacity>
		)
	}
}

export default class App extends Component {
	constructor() {
        super();

        this.state = {
            data: [
                {
                    id: '1',
                    title: 'Charger toshiba original19v-3,42Ac640,L640,L730,L745,C800 C840 L10 L510 T135 C40 M35X M40X B40a T110',
                    price: '85.000',
                    image: 'https://cf.shopee.co.id/file/88181e18e9c400f004be5ad78f145d40_tn'
                },
                {
                    id: '2',
                    title: 'Laptop Bekas Second ASUS X200 - RAM 2GB - HDD 500GB - Slim Elegan Bekas Second Berkualitas',
                    price: '2.025.000',
                    image: 'https://cf.shopee.co.id/file/7789f8cb30eefe0a75f9beba04022f47_tn'
                },
                {
                    id: '3',
                    title: '★Star Seller★ Laptop Core i5 RAM 8GB 500GB, Laptop Bekas Second Seken Core i5 Ram 8GB - Twenty Cell',
                    price: '3.650.000',
                    image: 'https://cf.shopee.co.id/file/7ad55e22e62899b1df88be137dd5f80f_tn'
                },
                {
                    id: '4',
                    title: 'Laptop Lenovo 15.6" Core i5 / 500GB / Ram 4GB - Laptop Bekas Lenovo 15.6 inch',
                    price: '3.000.000',
                    image: 'https://cf.shopee.co.id/file/14a90f185c88aa0a65fc563c91250ffb_tn'
                },
                {
                    id: '5',
                    title: 'Laptop Bekas Second ASUS X200 - RAM 2GB - HDD 500GB - Slim Elegan Bekas Second Berkualitas',
                    price: '2.025.000',
                    image: 'https://cf.shopee.co.id/file/7789f8cb30eefe0a75f9beba04022f47_tn'
                },
                {
                    id: '6',
                    title: '★Star Seller★ Laptop Core i5 RAM 8GB 500GB, Laptop Bekas Second Seken Core i5 Ram 8GB - Twenty Cell',
                    price: '3.650.000',
                    image: 'https://cf.shopee.co.id/file/7ad55e22e62899b1df88be137dd5f80f_tn'
                },
                {
                    id: '7',
                    title: 'Laptop Lenovo 15.6" Core i5 / 500GB / Ram 4GB - Laptop Bekas Lenovo 15.6 inch',
                    price: '3.000.000',
                    image: 'https://cf.shopee.co.id/file/14a90f185c88aa0a65fc563c91250ffb_tn'
                }
            ]
        }
    }

	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
						<TouchableHighlight style={styles.chat}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.container}>
					<View style={styles.body}>
						<ScrollView>
							<View style={{paddingBottom: 10, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
								<View style={{height: 60, paddingLeft: 20, justifyContent: 'center'}}>
									<Image style={{width: 50, height: 50, borderRadius: 50}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
								</View>
								<View style={{flexDirection: 'column', margin: 5, marginLeft: 10}}>
									<View>
										<Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>mhdrare</Text>
									</View>
									<View>
										<View style={{flexDirection: 'row'}}>
											<Text style={{fontSize: 12}}>Pengikut 777</Text>
											<View style={{marginLeft: '6%', height: '100%', borderWidth: 0.4}}></View>
											<Text style={{marginLeft: '6%',fontSize: 12}}>Mengikuti 111</Text>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.body, {paddingTop: 5}}>
								<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('PurchaseHistories')}>
									<MaterialCommunityIcons name="store" style={{flex: 1, marginLeft: '2%'}} size={25} color="#EE4D2D" />
									<Text style={styles.textPenjualan}>Penjualan Saya</Text>
									<Text style={{fontSize: 11}}>Lihat Riwayat Penjualan</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
								<View style={styles.itemPenjualan}>
									<TouchableOpacity style={styles.statusPenjualan}>
										<MaterialCommunityIcons name="truck" size={30}/>
										<Text style={styles.textStatus}>Perlu Dikirim</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.statusPenjualan}>
										<MaterialCommunityIcons name="cancel" size={30}/>
										<Text style={styles.textStatus}>Dibatalkan</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.statusPenjualan}>
										<MaterialIcons name="compare-arrows" size={30}/>
										<Text style={styles.textStatus}>Pengembalian</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.statusPenjualan}>
										<Entypo name="dots-three-horizontal" size={30}/>
										<Text style={styles.textStatus}>Lainnya</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.body, {paddingTop: 5}}>
								<TouchableOpacity style={styles.items} onPress={()=>this.props.navigation.navigate('AddProduct')}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Tambah Produk Baru</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body, {paddingTop: 5}}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Saldo Penjual</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Penghasilan Saya</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Jasa Kirim Saya</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Lihat Penilaian Toko</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Performa Toko</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="pluscircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Asisten Penjual</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body}>
								<TouchableOpacity style={styles.items}>
									<AntDesign name="questioncircleo" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
									<Text style={styles.text}>Pusat Bantuan</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body, {paddingTop: 5}}>
								<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('PurchaseHistories')}>
									<MaterialCommunityIcons name="store" style={{flex: 1, marginLeft: '2%'}} size={25} color="#EE4D2D" />
									<Text style={styles.textPenjualan}>Lihat Toko Saya</Text>
									<Text style={{fontSize: 11, color: '#EE4D2D'}}>shovee.co.id/sobat</Text>
									<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '1%'}} size={18}/>
								</TouchableOpacity>
							</View>
							<View style={styles.body, {paddingTop: 5}}>
								<View style={styles.items}>
									<FontAwesome name="box-open" style={{flex: 1, marginLeft: '2%'}} size={18} color="#EE4D2D" />
									<Text style={{flex:9, color:'#000'}}>{this.state.data.length} Produk</Text>
								</View>
							</View>

							<View style={{flex:1}}>
								<View style={{flexDirection:'row'}}>
									<FlatList
									data={this.state.data}
									numColumns={2}
									keyExtractor={(item,index) => item.id}
									renderItem={({item, index}) => {
										return (
											<SellProduct item={item} index={index} />
										)
									}} />
								</View>
							</View>
						</ScrollView>
					</View>
				</View>
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		height: 80,
		width: '100%',
		backgroundColor: '#FFFFFF',
	},
	headerTop: {
		flexDirection: 'row',
		top: 40,
		alignItems: 'center'
	},
	back: {
		flex: 1,
		paddingLeft: 20,
	},
	chat: {
		flex: 1,
		alignItems: 'flex-end',
		paddingRight: 30,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 80,
		backgroundColor: '#EFEFEF',
	},
	body: {
		backgroundColor: '#EFEFEF',
		flexDirection: 'column',
		width: '100%',
	},
	items: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 45,
		alignItems: 'center',
	},
	itemPenjualan: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 80,
		borderColor: '#f2f2f2',
		borderTopWidth: 0.4,
		borderBottomWidth: 0.4,
		alignItems: 'center',
	},
	textPenjualan: {
		flex: 6, 
		color: '#000000'
	},
	statusPenjualan: {
		flex: 1,
		alignItems: 'center'
	},
	textStatus: {
		fontSize: 11,
		marginTop: 5
	},
	text: {
		flex: 8, 
		color: '#000000'
	}
})
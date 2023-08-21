import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "featured"] {
            ...,
            restaurants[]-> {
              ...,
              dishes[]->
            }
          }`
            )
            .then((data) => {
                setFeaturedCategories(data);
            });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-5'>
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image
                    source={{
                        uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>
                <UserIcon size={35} color='#00CCBB' />
            </View>
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color='gray' size={20} />
                    <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color='#00CCBB' />
            </View>
            <ScrollView className='bg-gray-100' contentContainerStyle={{ paddingBottom: 100 }}>
                <Categories />
                <FeaturedRow id='1' title='Featured' description='description of feature' />
                <FeaturedRow id='2' title='Featured' description='description of feature' />
                <FeaturedRow id='3' title='Featured' description='description of feature' />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

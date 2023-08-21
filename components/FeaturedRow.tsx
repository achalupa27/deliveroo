import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

type Props = {
    id: string;
    title: string;
    description: string;
};

const dummyData: Restaurant = {
    id: 'string',
    imgUrl: 'https://links.papareact.com/gn7',
    title: 'string',
    rating: 'string',
    genre: 'string',
    address: 'string',
    short_description: 'string',
    dishes: ['string'],
    long: 'string',
    lat: 'string',
};

const FeaturedRow = ({ id, title, description }: Props) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>

            <Text className='text-xs text-gray-500 px-4'>{description}</Text>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} className='pt-4'>
                <RestaurantCard {...dummyData} />
                <RestaurantCard {...dummyData} />
                <RestaurantCard {...dummyData} />
                <RestaurantCard {...dummyData} />
                <RestaurantCard {...dummyData} />
                <RestaurantCard {...dummyData} />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

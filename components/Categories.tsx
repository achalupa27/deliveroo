import { ScrollView, Text } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title='test' />
        </ScrollView>
    );
};

export default Categories;

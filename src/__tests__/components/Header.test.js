import React from 'react'; 
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header/Header'; 

Enzyme.configure({ adapter: new Adapter() });

it('It should render without errors', () => {

}); 

/*
describe('<Header />', ()=>{
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Header />); 
            const component = wrapper.dive(); 

            expect(toJson(component)).toMatchSnapshot(); 
        }); 
        
    }); 
}); 

*/
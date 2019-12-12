import React from 'react'; 
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from '../../components/SearchContainer/SearchContainer'; 

Enzyme.configure({ adapter: new Adapter() });

it('It should render without errors', () => {

}); 

/*

describe('<SearchContainer />', ()=>{
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<SearchContainer />); 
            const component = wrapper.dive(); 

            expect(toJson(component)).toMatchSnapshot(); 
        }); 
        
    }); 
}); 
*/
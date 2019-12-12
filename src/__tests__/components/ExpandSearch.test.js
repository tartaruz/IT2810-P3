import React from 'react'; 
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'; 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpandSearch from '../../components/SearchContainer/ExpandSearch'; 

Enzyme.configure({ adapter: new Adapter() });

it('It should render without errors', () => {

}); 


/*

describe('<ExpandSearch />', ()=>{
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ExpandSearch />); 
            const component = wrapper.dive(); 

            expect(toJson(component)).toMatchSnapshot(); 
        }); 
        
    }); 
}); 

*/
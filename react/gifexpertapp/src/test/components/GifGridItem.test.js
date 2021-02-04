import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
	const title = 'Un titulo';
	const url = 'https://media2.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=c97b409cztnul8gq4ltfq3v1g0h5u8uwxd2pax259sjmsd9s&rid=giphy.gif';
    
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('debe mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
    });
    
    test('div con el titulo',()=>{
        const label = wrapper.find('label');
        expect(label.text().trim()).toBe(title);
    });

    test('debe de obtener la imagen igual al url',()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
});

import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="note__maint-context">
			<NotesAppBar />

			<div className="note__context">
				<input type="text" placeholder="Tituloescribe algo" className="note__title-input" />
                <textarea
                
                placeholder='Descripcion'
                className='note_textarea'></textarea>

                <div className="note__image">
                    <img src='https://lh3.googleusercontent.com/AV9lqrNBmuOkCzUer4v4GSGkH36lcvLmd3V3f7amxBJjYMORS3H9b8MqwLMDXwun5PkILQ=s150'
                    alt='imagen' />
                </div>
			</div>
		</div>
	);
};

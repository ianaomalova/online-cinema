import {ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes} from 'react';
import {FieldError} from 'react-hook-form';
import {EditorProps} from 'react-draft-wysiwyg';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
  placeholder: string,
  error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps;

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
  onChange: (...event: any[]) => void
  value: string
}

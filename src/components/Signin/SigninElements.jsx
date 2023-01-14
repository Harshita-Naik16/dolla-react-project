import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #01bf71;
    min-height: 692px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled(Link)`
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 2rem;
  padding-left: 36px; 
  font-weight: bold;
  text-decoration: none;
`;

export const FormContainer = styled.div`
    background: #000;
    min-width: 350px;
    width: 60%;
    max-width: 450px;
    padding: 2rem 1rem;
    border-radius: 6px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
`;

export const FormH1 = styled.h1`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 36px;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 20px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 36px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;
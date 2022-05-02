import React, {useState} from 'react'
import {Form} from 'semantic-ui-react'
import axios from 'axios';

const insuranceTypeList = [
    {key: 'o', text: 'ОСАГО', value: 'osago'},
    {key: 'c', text: 'КАСКО', value: 'casco'},
    {key: 'a', text: 'АВТОЗАЩИТА', value: 'autozashita'},
]

const inspectionTypeList = [
    {key: 'B', text: 'Техосмотр кат B', value: 'inspectionTypeB'},
    {key: 'C', text: 'Техосмотр кат C', value: 'inspectionTypeC'},
    {key: 'D', text: 'Техосмотр кат D', value: 'inspectionTypeD'},
]

export const Create = () => {
    const [fullName, setFullName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [stateNumber, setStateNumber] = useState(null);
    const [insuranceType, setInsuranceType] = useState(null);
    const [insurancePolicyDateStart, setInsurancePolicyDateStart] = useState(null);
    const [insurancePolicyDateEnd, setInsurancePolicyDateEnd] = useState(null);
    const [inspectionType, setInspectionType] = useState(null);
    const postCarService = () => {
        axios.post(`http://localhost:8080/api/orders`, {
            fullName,
            phoneNumber,
            stateNumber,
            insuranceType,
            insurancePolicyDateStart,
            insurancePolicyDateEnd,
            inspectionType
        }).then(() => document.location = 'read')
    }
    return (
        // @ts-ignore
        <Form>
            <Form.Group widths='equal'>
                <Form.Input
                    onChange={(e) => setFullName(e.target.value)}
                    fluid
                    label='ФИО' placeholder='ФИО'/>
                <Form.Input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fluid
                    label='Номер телефона'
                    placeholder='Номер телефона'/>
                <Form.Input
                    onChange={(e) => setStateNumber(e.target.value)}
                    fluid
                    label='Гос номер ТС'
                    placeholder='Гос номер ТС'/>
                <Form.Select
                    onChange={(e, {value}) => setInsuranceType(value)}
                    fluid
                    label='Вид страхования'
                    placeholder='Вид страхования'
                    options={insuranceTypeList}/>
                <Form.Input
                    onChange={(e) => setInsurancePolicyDateStart(e.target.value)}
                    fluid
                    label='Дата начала действия предыдущего полиса'
                    placeholder='Дата начала действия предыдущего полиса'/>
                <Form.Input
                    onChange={(e) => setInsurancePolicyDateEnd(e.target.value)}
                    fluid
                    label='Дата окончания действия предыдущего полиса'
                    placeholder='Дата окончания действия предыдущего полиса'/>
                <Form.Select
                    onChange={(e, {value}) => setInspectionType(value)}
                    fluid
                    label='Запись на техосмотр'
                    placeholder='Запись на техосмотр'
                    options={inspectionTypeList}/>
            </Form.Group>
            <Form.Button onClick={postCarService}>Submit</Form.Button>
        </Form>
    )
}

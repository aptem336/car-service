import React, {useEffect, useState} from 'react'
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

export const Update = (id) => {
    const [fullName, setFullName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [stateNumber, setStateNumber] = useState(null);
    const [insuranceType, setInsuranceType] = useState(null);
    const [insurancePolicyDateStart, setInsurancePolicyDateStart] = useState(null);
    const [insurancePolicyDateEnd, setInsurancePolicyDateEnd] = useState(null);
    const [inspectionType, setInspectionType] = useState(null);
    const putCarService = () => {
        axios.put(`https://626bc6d66a86cd64adc168b9.mockapi.io/car-service/${id.id}`, {
            fullName,
            phoneNumber,
            stateNumber,
            insuranceType,
            insurancePolicyDateStart,
            insurancePolicyDateEnd,
            inspectionType
        }).then(() => document.location = '/read')
    }
    useEffect(() => {
        axios.get(`https://626bc6d66a86cd64adc168b9.mockapi.io/car-service/${id.id}`)
            .then((response) => {
                setFullName(response.data.fullName);
                setPhoneNumber(response.data.phoneNumber);
                setStateNumber(response.data.stateNumber);
                setInsuranceType(response.data.insuranceType);
                setInsurancePolicyDateStart(response.data.insurancePolicyDateStart);
                setInsurancePolicyDateEnd(response.data.insurancePolicyDateEnd);
                setInspectionType(response.data.inspectionType);
            })
    }, []);
    return (
        // @ts-ignore
        <Form>
            <Form.Group widths='equal'>
                <Form.Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fluid
                    label='ФИО' placeholder='ФИО'/>
                <Form.Input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fluid
                    label='Номер телефона'
                    placeholder='Номер телефона'/>
                <Form.Input
                    value={stateNumber}
                    onChange={(e) => setStateNumber(e.target.value)}
                    fluid
                    label='Гос номер ТС'
                    placeholder='Гос номер ТС'/>
                <Form.Select
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    fluid
                    label='Вид страхования'
                    placeholder='Вид страхования'
                    options={insuranceTypeList}/>
                <Form.Input
                    value={insurancePolicyDateStart}
                    onChange={(e) => setInsurancePolicyDateStart(e.target.value)}
                    fluid
                    label='Дата начала действия предыдущего полиса'
                    placeholder='Дата начала действия предыдущего полиса'/>
                <Form.Input
                    value={insurancePolicyDateEnd}
                    onChange={(e) => setInsurancePolicyDateEnd(e.target.value)}
                    fluid
                    label='Дата окончания действия предыдущего полиса'
                    placeholder='Дата окончания действия предыдущего полиса'/>
                <Form.Select
                    value={inspectionType}
                    onChange={(e) => setInspectionType(e.target.value)}
                    fluid
                    label='Запись на техосмотр'
                    placeholder='Запись на техосмотр'
                    options={inspectionTypeList}/>
            </Form.Group>
            <Form.Button onClick={putCarService}>Submit</Form.Button>
        </Form>
    )
}

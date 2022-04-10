import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@atlaskit/button';
import {Event} from '../../dtos/IEventDTO';
import Header from '../../components/Header';
import { Events, EventDetails, TrendingEvents, DateBox} from './styles';
import { Footer } from '../../components/Footer';


const dashboardPage: NextPage = () => {
    const user = { 
        name: 'Rafael',
        avatar_url: '/assets/avatars/147142.png'
    }
    const events:Event[] = [{
            id: '1',
            name: 'Saidera daora no altas - OPEN BAR',
            local: {
                city: 'Chapeco',
                uf: 'SC'
            },
            description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
            thumbnail: '/assets/pty.png',
            eventDate: '2022-04-04'
        },
        {
            id: '1',
            name: 'Saidera daora no altas- OPEN BAR',
            description:  'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
            local: {
                city: 'Chapeco',
                uf: 'SC'
            },
            thumbnail: '/assets/logo.png',
            eventDate: '2022-04-31'
        },
        {
            id: '1',
            name: 'Saidera daora no altas- OPEN BAR',
            description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
            local: {
                city: 'Chapeco',
                uf: 'SC'
            },
            thumbnail: '/assets/pty_large.png',
            eventDate: '2022-05-23'
        },
        {
            id: '1',
            name: 'Saidera daora no altas- OPEN BAR',
            description: 'Bela noite para dar uma volta na frente de um dos pontos mais belos de Chapecó, o famoso Altas!',
            local: {
                city: 'Chapeco',
                uf: 'SC'
            },
            thumbnail: '/assets/pty.png',
            eventDate: '2022-06-07'
        },
];
    
    return (
        <>
            <Header title='TikToken' ></Header>
            <Events>
                <h1> Trending events</h1>
                <TrendingEvents>

                    <ul>
                    {events.map((event, index) => {
                        return (
                            <li key={event.id}>

                                <img src={event.thumbnail} alt={event.name} />
                                <Link  href={`/events/${event.id}`}>
                                <a>{event.name}</a>
                                </Link>
                            <EventDetails>
                                <div>
                                    <p>{event.description}</p>
                                    <span>{event.local.city} - {event.local.uf}</span>
                                </div>

                                <DateBox>
                                    <strong>{event.eventDate?.split('-')[2]}</strong>
                                    <strong>{event.eventDate?.split('-')[1]}</strong>
                                    <span>{event.eventDate?.split('-')[0]}</span>
                                </DateBox>
                            </EventDetails>
                            </li>
                        )
                    })}
                    </ul>
                
                </TrendingEvents>
            </Events>
            <Footer/>
        </> 



)

}
 

export default dashboardPage
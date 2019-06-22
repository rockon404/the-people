import {AppEvent, AppNotification} from './types';
import { AppEventTypes } from './constants';

export const notifications: AppNotification[] = [
  {
    id: 'aedc8-9aefd-aedc8-9aefd-c654a',
    from: 'mchs-russia',
    slug: 'mchs-russia-preduprejdaet-2019-07-26',
    description: 'Завтра, 23 июня, в области прогнозируется шквалистый ветер с усилением до 15-20 метров в секунду. Согласно данным синоптиков, в северной части области пройдут дожди с грозами. Локально выпадет град.',
    created_at: '2019-07-26T03:24:00',
    expires_at: '2019-07-26T03:24:00',
    title: 'МЧС Калининградской области предупреждает о шквалистом ветре!',
  },
];

export const users = [
  {},
  {},
  {},
  {},
];

export const events: AppEvent[] = [
  {
    id: 'aedc8-9aefd-aedc8-9aefd-c654a',
    slug: 'sonic_youth_vagonka',
    title: 'Концерт группы Sonic Youth',
    type: AppEventTypes.Concerts,
    date: '2019-07-25T03:24:00',
    created_at: '2019-07-26T03:24:00',
    expires_at: '2019-07-26T03:24:00',
    short_description: 'Состоится очень интересное событие это концерт.',
    description: 'Состоится очень интересное событие это концерт.',
    place: 'vagonka',
    image: `https://placeimg.com/640/480/1?r=${Math.random()}`,
  },
  {
    id: 'aedc8-dddfd-aedc8-9aefd-c654a',
    slug: 'baltika_liverpool',
    title: 'Футбол: Балтика - Liverpool',
    type: AppEventTypes.Sport,
    date: '2019-07-26T03:24:00',
    created_at: '2019-07-26T03:24:00',
    expires_at: '2019-07-26T03:24:00',
    short_description: 'Знаковый для нашей команды матч.',
    description: 'Знаковый для нашей команды матч.',
    place: 'stadion-kaliningrad',
    image: `https://placeimg.com/640/480/2?r=${Math.random()}`,

  },
  {
    id: '44448-dddfd-aedc8-9aefd-c654a',
    slug: 'andy_warhol',
    title: 'Выставка работ Энди Уорхола',
    type: AppEventTypes.Exhibitions,
    date: '2019-07-27T03:24:00',
    created_at: '2019-07-26T03:24:00',
    expires_at: '2019-07-26T03:24:00',
    short_description: 'И снова Калининград посещает знаменитая выставка. Количество билетов ограничено',
    description: 'И снова Калининград посещает знаменитая выставка. Количество билетов ограничено',
    place: 'dom-iskusstv',
    image: `https://placeimg.com/640/480/3?r=${Math.random()}`,
  },
];
'use strict'

const people_01 = {
    'name' : 'Mg Ba',
    'live_in' : 'Lived in North Oakalarpa',
    'detain_in' : 'Detained in North Oakalarpa',
    'type' : 'released'
};
const people_02 = {
    'name' : 'Mg Mya',
    'live_in' : 'Lived in South Oakalarpa',
    'detain_in' : 'Detained in South Oakalarpa',
    'type' : 'detained'
};
const people_03 = {
    'name' : 'Ma Hla',
    'live_in' : 'Lived in Hledan',
    'detain_in' : 'Detained in Tarmwe',
    'type' : 'detained'
};
const people_04 = {
    'name' : 'Mg Khin Ko',
    'live_in' : 'Lived in Sanchaung',
    'detain_in' : 'Detained in Sanchaung',
    'type' : 'detained'
};
const people_05 = {
    'name' : 'Mg Htay',
    'live_in' : 'Lived in Thingangyun',
    'detain_in' : 'Detained in Thingangyun',
    'type' : 'released'
};
const people_06 = {
    'name' : 'Mg Hla Myint',
    'live_in' : 'Lived in Alon',
    'detain_in' : 'Detained in Dawpone',
    'type' : 'released'
};
const people_07 = {
    'name' : 'Ma Zuu',
    'live_in' : 'Lived in Hledan',
    'detain_in' : 'Detained in Mayangon',
    'type' : 'detained'
};
const people_08 = {
    'name' : 'Mg Ba Bo',
    'live_in' : 'Lived in Tharkata',
    'detain_in' : 'Detained in Tharkata',
    'type' : 'detained'
};
const people_09 = {
        'name' : 'Mg Hla Bo',
        'live_in' : 'Lived in YanKin',
        'detain_in' : 'Detained in YanKin',
        'type' : 'released'
};
const people_10 = {
    'name' : 'Mg Ba Myint',
    'live_in' : 'Lived in Tarmwe',
    'detain_in' : 'Detained in Tarmwe',
    'type' : 'detained'
};

const people_data = [people_01,people_02,people_03,people_04,people_05,people_06,people_07,people_08,people_09,people_10];


const detailName = document.querySelector('.section-detail__list');
const model = document.querySelector('.model');
const overlay = document.querySelector('.model--overlay');
const box = document.querySelector('.model__box');

const allPeopleName = function(all_data){
    all_data.forEach(function(data,i){
        const html = `
            <div class='row'>
                <div class="col-1-of-1">
                    <div class="section-detail__list--detail">
                        <p class="u-ml-small text-detail">
                        <span class="number-detail">
                            ${i + 1} .
                        </span>
                            ${data.name}
                        <span class="btn btn--${data.type}">${data.type}</span>
                        </p>    
                    </div>
                </div>
            </div>`
        detailName.insertAdjacentHTML('beforeend', html);
    }); 
    const peopleName = document.querySelectorAll('.section-detail__list--detail');
    for(let i=0; i< peopleName.length; i++){
        peopleName[i].addEventListener('click', function(){
            select_people(people_data[i]);
            show();
        });
    }
};

const select_people = function(data){
    let html = `
        <div class="model--close">&times;</div>
        <div class="model__box--1">
            <img src="img/paing.jpg" alt="photo" class="model--photo">
            <p class="model__box--name u-mt-small">${data.name}</p>
        </div>

        <div class="model__box--2">
            <div class="model__box--text">
                <svg class="model__box--icon">
                    <use xlink:href="img/sprite.svg#icon-home"></use>
                </svg>
                <span class="u-ml-small">${data.live_in}</span>
            </div>
            <div class="model__box--text">
                <svg class="model__box--icon">
                    <use xlink:href="img/sprite.svg#icon-location-pin"></use>
                </svg>
                <span class="u-ml-small">${data.detain_in}</span>
            </div>
            <div class="model__box--text">
                <svg class="model__box--icon">
                    <use xlink:href="img/sprite.svg#icon-chat"></use>
                </svg>
                <span class="u-ml-small">Name are not real, Just Testing</span>
            </div>
        </div>
    `
    box.innerHTML = html
    document.querySelector('.model--close').addEventListener('click', hide);
    document.querySelector('.model--overlay').addEventListener('click', hide);
};

const show = () => {
    model.classList.remove('hidden');
    box.classList.add('box-animation');
}
const hide = () => {
    model.classList.add('hidden');
    box.classList.remove('box-animation');
}

allPeopleName(people_data)




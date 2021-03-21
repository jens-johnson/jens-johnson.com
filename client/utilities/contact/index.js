//import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import { submitApiData } from '~/utilities/api';

var submit_contact = async () => {
    /**
     * Function submit_contact
     *
     * @description: Utility to submit contact data from contact form to API using endpoint /api/contact/submit.
     *
     * == INPUT ==:
     *  - None
     *
     * == RETURN ==:
     *  - @returns
     *      * None
     *
     * == SIDE EFFECT ==:
     *  - None
     **/

    const formData = {
        firstName: $('#contactFirstName').val(),
        lastName: $('#contactLastName').val(),
        email: $('#contactEmail').val(),
        message: $('#contactMessage').val(),
        emailSignUp: $('#contactEmailList').is(':checked')
    }

    /*
    await submitApiData('/api/contact/submit', formData).then(() => {
        location.reload();
    }).catch(() => {
        location.href = '/';
    });
    */

    console.log('submitted');
}

export {
    submit_contact
};

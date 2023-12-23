import Image from "next/image";
import axios from 'axios';
import { useState } from "react";
import { IoAdd, IoMailOutline, IoPersonOutline } from "react-icons/io5";
import Button from "../../components/core/Button";
import contactUsBg from '../../public/contactus-bg.png'
import {
       ContactFormContainer,
       ContactForm,
       IntroArea,
       ImageHolder,
       Overlay,
       Title,
       Subtitle,
       FormArea,
       FormContainer,
       FormGroup,
       FormLabel,
       ChoiceContainer,
       TextBox,
       Icon,
       Input,
       FormAction,
       Error,
       FormButton,
       TextArea,
       LoadingContainer,
       LoadingArea,
       LoadingSpinner,
       LoadingDescription,
       Content
} from './contactme.components';
import Choice from "./Choice";
import Spinner from '../../components/core/Spinner';

const lambdaUrl = 'https://6d0uq4w51b.execute-api.ap-northeast-1.amazonaws.com/';

const contactReasons = [
       {
              name: 'openning',
              text: 'Vacancy or Openings'
       },
       {
              name: 'ui',
              text: 'UI/Frontend Task'
       },
       {
              name: 'server',
              text: 'API/Backends Task'
       },
       {
              name: 'bugfix',
              text: 'A Bug To Fix'
       },
       {
              name: "greet",
              text: "Greeting"
       },
       {
              name: "other",
              text: "Another Reason"
       }
];

let imgLoaded = false;

function ContactMeForm({ style }: { style?: object }) {

       let [reason, setReason] = useState('other');
       let [errors, setErrors] = useState({
              name: false,
              email: false,
              message: false
       });
       let [shakeFlag, setShakeFlag] = useState(false);
       let [formState, setFormState] = useState(0);
       let [contactInfo, setContactInfo] = useState({
              name: '',
              email: '',
              offer: 0,
              message: ''
       });
       

       const onChange = (name, event) => {

              if(!imgLoaded) {
                     let img = new window.Image();
                     img.src = './sent-message.png';
                     imgLoaded = true;

              }

              let newContactInfo = Object.assign({}, contactInfo);
              newContactInfo[name] = event.target.value;

              setContactInfo(newContactInfo);
       };

       const onSendClick = async () => {

              const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

              let isEmailCorrect = contactInfo.email && emailRegex.test(contactInfo.email);

              let errors = {
                     name: !contactInfo.name ? true : false,
                     email: !isEmailCorrect ? true : false,
                     message: !contactInfo.message ? true : false
              };

              setErrors(errors);

              if (errors.email || errors.name || errors.message) {       

                     setShakeFlag(true);

                     setTimeout(() => {
                            setShakeFlag(false);
                     }, 2000);

                     return;
              }

              try {
                     setFormState(1);

                     let result = await axios.post(lambdaUrl + 'sendMessage', {
                            ...contactInfo,
                            reason
                     }, {
                            headers: {
                                   'content-type': 'application/json',
                                   'xref': 'XPD'
                            }
                     });
                     
                     setFormState(2);
              }
              catch (e) {
                     setFormState(0);
              }

       };

       const onChoiceSelection = (reasonName) => {

              setReason(reasonName);

       };

       let isOfferShowing = (reason === 'openning' || reason === 'ui' || reason === 'server' || reason === 'bugfix');

       let formContent = null;

       if (formState === 1) {

              formContent = (
                     <LoadingArea>
                            <LoadingContainer>
                                   <LoadingSpinner>
                                          <Spinner circleColor="rgb(172 91 228 / 50%)" arcColor="#6f49d3" width={30} height={30}></Spinner>
                                   </LoadingSpinner>
                                   <LoadingDescription>
                                          <Content>
                                                 Please hold on for the aws lambda, we are sending the message.
                                          </Content>
                                   </LoadingDescription>
                            </LoadingContainer>
                     </LoadingArea>
              )

       }
       else if (formState === 0) {
              formContent = (
                     <FormContainer>
                            <FormGroup>
                                   <FormLabel>I have a</FormLabel>
                                   <ChoiceContainer>
                                          {
                                                 contactReasons.map((contactReason) => {
                                                        return (
                                                               <Choice
                                                                      isSelected={contactReason.name === reason}
                                                                      onSelected={onChoiceSelection}
                                                                      text={contactReason.text}
                                                                      value={contactReason.name}
                                                                      key={contactReason.name}
                                                               ></Choice>
                                                        );
                                                 })
                                          }


                                          <input type="hidden" value={reason} />
                                   </ChoiceContainer>
                            </FormGroup>
                            <FormGroup>
                                   <FormLabel>Your Name {errors.name && <Error>* Name is required</Error>}</FormLabel>
                                   <TextBox hasError={errors.name} shake={shakeFlag}>
                                          <Icon>
                                                 <IoPersonOutline color="#3d1e8f"></IoPersonOutline>
                                          </Icon>
                                          <Input onChange={e => onChange('name', e)} />
                                   </TextBox>
                            </FormGroup>
                            <FormGroup>
                                   <FormLabel>Email {errors.email && <Error>* Email is required</Error>}</FormLabel>
                                   <TextBox hasError={errors.email} shake={shakeFlag}>
                                          <Icon>
                                                 <IoMailOutline color="#3d1e8f"></IoMailOutline>
                                          </Icon>
                                          <Input onChange={e => onChange('email', e)} />
                                   </TextBox>
                            </FormGroup>
                            {
                                   isOfferShowing && (
                                          <FormGroup>
                                                 <FormLabel>Proposed Salary/Project Offer (Optional)</FormLabel>
                                                 <TextBox>
                                                        <Icon>
                                                               $
                                                        </Icon>
                                                        <Input type="number" onChange={e => onChange('offer', e)} placeholder="In USD" />
                                                 </TextBox>
                                          </FormGroup>
                                   )
                            }
                            <FormGroup>
                                   <FormLabel>Message {errors.message && <Error>* Message is required</Error>}</FormLabel>
                                   <TextArea hasError={errors.message} shake={shakeFlag} onChange={e => onChange('message', e)} />
                            </FormGroup>
                            <FormAction>
                                   <FormButton onClick={onSendClick}>Send</FormButton>
                            </FormAction>
                     </FormContainer>
              );
       }

       else {
              formContent = (
                     <LoadingArea>
                            <LoadingContainer>
                                   <img src="/sent-message.png" />
                                   <LoadingDescription>
                                          <Content>
                                                 Your message has sent succesfully. I'll get back to you soon. Thank You.
                                          </Content>
                                   </LoadingDescription>
                            </LoadingContainer>
                     </LoadingArea>
              );
       }

       return (
              <ContactFormContainer style={style}>
                     <ContactForm>
                            <IntroArea>
                                   <ImageHolder>
                                   </ImageHolder>
                                   <Overlay>
                                          <Title>
                                                 Do you have any questions?
                                          </Title>
                                          <Subtitle>Just shoot me a message using the form here. I&apos;ll get back to you soon.</Subtitle>
                                   </Overlay>
                            </IntroArea>
                            <FormArea>
                                   {formContent}
                            </FormArea>
                     </ContactForm>
              </ContactFormContainer>
       );
}

export default ContactMeForm;
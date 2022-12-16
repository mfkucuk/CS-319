import React, { useState } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function ApplicationFormEditY() {

  let navigate = useNavigate();
  function clickBack() {
    navigate("/myApplication");
  }

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <h1 style={{ color: '#f4eff2' }}>Application Form</h1>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak />
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <Form>
              <Form.Group className="ps-4" controlId="applicationFormPersonalInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Personal Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>First Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Last Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDoB">
                <Form.Label>Date of Birth:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Nationality:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditStudentInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Student Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditStudentID">
                <Form.Label>Student ID No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDepartment">
                <Form.Label>Department/Class:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditCumGPA">
                <Form.Label>Cumulative GPA:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditContactInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Contact Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditUnivEmail">
                <Form.Label>University E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPersonalEmail">
                <Form.Label>Personal E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditMobilePhoneNo">
                <Form.Label>Mobile Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLocalPhoneNo">
                <Form.Label>Local Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPostalAddress">
                <Form.Label>Postal Address:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <Form>
              <Form.Group className="pt-3 mb" controlId="applicationFormEditFirstNameForm">
                <Form.Label>Mehmet Behnan</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditLastNameForm">
                <Form.Label>Türkeri</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDoBForm">
                <Form.Label>28/05/1998</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb" controlId="applicationFormEditNationalityForm">
                <Form.Label>Turkey</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                <Form.Label>21602468</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDepartmentForm">
                <Form.Label>Management</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-3" controlId="applicationFormEditCumGPAForm">
                <Form.Label>2.84</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditUnivEmailForm">
                <Form.Label>behnan.turkeri@ug.bilkent.edu.tr</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationformEditPersonalEmailForm">
                <Form.Control placeholder="Personal E-mail Address" />
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationFormEditMobilePhoneNoForm">
                <Form.Control placeholder="Mobile Phone Number" />
              </Form.Group>
              <Form.Group className="me-5 mb-1" controlId="applicationFormEditLocalPhoneNoForm">
                <Form.Control placeholder="Local Phone Number" />
              </Form.Group>
              <Form.Group className="me-5 mb-3" controlId="applicationFormEditPostalAddressForm">
                <Form.Control as="textarea" rows={4} placeholder="Postal Address" />
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <Form className="pe-5">
              <Form.Group controlId="applicationFormEditUnivPreferences">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Erasmus Host University Preferences:</h5></Form.Label>
              </Form.Group>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>1.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 1">
                <option>Select</option>
                <option value="1">Aberystwyth University</option>
                <option value="2">Adam Mickiewicz Universitesi</option>
                <option value="3">AGH University of Science and Technology</option>
                <option value="4">Akademia Sztuk Pięknych w Gdańsku</option>
                <option value="5">Amsterdam University College</option>
                <option value="6">Architectural Institution in Prague</option>
                <option value="7">Aston University</option>
                <option value="8">Athlone Institute of Technology</option>
                <option value="9">Bamberg Üniversitesi</option>
                <option value="10">Bergen Üniversitesi</option>
                <option value="11">Bocconi University</option>
                <option value="12">Bournemouth University</option>
                <option value="13">Ca Foscari University of Venice</option>
                <option value="14">Cadiz Üniversitesi</option>
                <option value="15">Corvinus University of Budapest</option>
                <option value="16">Cracow University of Economics</option>
                <option value="17">Eberhard Karls Universitat Tübingen</option>
                <option value="18">École Polytechnique Fédérale (EPF)</option>
                <option value="19">EDHEC Business School</option>
                <option value="20">Erasmus Universiteit Rotterdam</option>
                <option value="21">Erfurt Üniversitesi</option>
                <option value="22">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="23">ESIEE Paris</option>
                <option value="24">Eszterhazy Karoly Foiskola</option>
                <option value="25">Free University of Bozen/Bolzano</option>
                <option value="26">Friedrich-Alexander-Universitat Erlangen-Nürnberg</option>
                <option value="27">Ghent Üniversitesi</option>
                <option value="28">Göteborg Üniversitesi</option>
                <option value="29">Groningen Üniversitesi</option>
                <option value="30">Hanzehogeschool Groningen</option>
                <option value="31">Helsinki Metropolia University of Applied Sciences</option>
                <option value="32">HOCHSCHULE FÜR MUSIK UND THEATER HANNOVER</option>
                <option value="33">Hogeschool INHolland</option>
                <option value="34">Huelva University</option>
                <option value="35">IBS - International Business School</option>
                <option value="36">ICHEC Brussels Management School</option>
                <option value="37">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="38">ISCTE IUL - Lisbon University Institute</option>
                <option value="39">Johann Wolfgang Goethe University</option>
                <option value="40">Katholieke Universiteit Leuven</option>
                <option value="41">Kaunas Teknoloji Üniversitesi</option>
                <option value="42">Kedge Business School</option>
                <option value="43">Kiel University</option>
                <option value="44">Kingston University</option>
                <option value="45">Konstanz University</option>
                <option value="46">Leiden Üniversitesi</option>
                <option value="47">Leipzig Üniversitesi</option>
                <option value="48">Leuphana Universitat Lüneburg</option>
                <option value="49">Liege Üniversitesi</option>
                <option value="50">Ljubljana Üniversitesi</option>
                <option value="51">London Metropolitan University</option>
                <option value="52">Maastricht University</option>
                <option value="53">Malmö Üniversitesi</option>
                <option value="54">Mannheim Üniversitesi</option>
                <option value="55">Masaryk Üniversitesi</option>
                <option value="56">Minho Üniversitesi</option>
                <option value="57">Neoma Business School</option>
                <option value="58">NHTV Breda University of Applied Sciences</option>
                <option value="59">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="60">Pforzheim University</option>
                <option value="61">Politechnika Gdanska</option>
                <option value="62">Politecnico di Milano</option>
                <option value="63">Polytechnic of Bari</option>
                <option value="64">Prag Sahne Sanatlar Akademisi</option>
                <option value="65">Prag'daki Charles Üniversitesi</option>
                <option value="66">Radboud University Nijmegen</option>
                <option value="67">RISEBA</option>
                <option value="68">Roskilde Universitesi</option>
                <option value="69">Ruhr-Universitat Bochum</option>
                <option value="70">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="71">Saarland Üniversitesi</option>
                <option value="72">Sciences Po</option>
                <option value="73">Sheffield Üniversitesi</option>
                <option value="74">Strasbourg Üniversitesi</option>
                <option value="75">SZENT ISTVAN UNIVERSITY</option>
                <option value="76">Tartu Üniversitesi</option>
                <option value="77">Technical University of Berlin</option>
                <option value="78">Technische Universiteti Eindhoven</option>
                <option value="79">TELECOM SudParis</option>
                <option value="80">TU Universitaet Dortmund</option>
                <option value="81">TU Vienna</option>
                <option value="82">Turku Üniversitesi</option>
                <option value="83">Universidad de Castilla-La Mancha</option>
                <option value="84">Universidad Pontificia Comillas de Madrid</option>
                <option value="85">Universidade Catolica Portuguesa</option>
                <option value="86">Universidade do Porto</option>
                <option value="87">Universidade Nova de Lisboa</option>
                <option value="88">Universita degli Studi di Firenze</option>
                <option value="89">Universita degli Studi di L&#039;Aquila</option>
                <option value="90">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="91">Universita degli Studi di Perugia</option>
                <option value="92">Universitaet Bayreuth</option>
                <option value="93">Universitat Autonoma de Barcelona</option>
                <option value="94">Universitat de Barcelona</option>
                <option value="95">Universität Luzern</option>
                <option value="96">Université Catholique de Lille (IESEG)</option>
                <option value="97">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="98">Université de Bretagne Occidentale</option>
                <option value="99">Universite Paris-Dauphine</option>
                <option value="100">Universiteit Van Tilburg</option>
                <option value="101">University of Applied Sciences Upper Austria</option>
                <option value="102">University of Bologna</option>
                <option value="103">University of Deusto</option>
                <option value="104">University of Dundee</option>
                <option value="105">University of Edinburgh</option>
                <option value="106">University of Limerick</option>
                <option value="107">University of Münster</option>
                <option value="108">University of Southern Denmark</option>
                <option value="109">University of Twente</option>
                <option value="110">Univerversité Saint-Louis</option>
                <option value="111">UNIWERSYTET SZCZECINSKI</option>
                <option value="112">Utrecht Üniversitesi</option>
                <option value="113">Varşova Üniversitesi</option>
                <option value="114">Vilnius Üniversitesi</option>
                <option value="115">Vrije Üniversitesi</option>
                <option value="116">Warsaw School of Economics</option>
                <option value="117">Waterford Institute of Technology</option>
                <option value="118">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>2.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 2">
                <option>Select</option>
                <option value="1">Aberystwyth University</option>
                <option value="2">Adam Mickiewicz Universitesi</option>
                <option value="3">AGH University of Science and Technology</option>
                <option value="4">Akademia Sztuk Pięknych w Gdańsku</option>
                <option value="5">Amsterdam University College</option>
                <option value="6">Architectural Institution in Prague</option>
                <option value="7">Aston University</option>
                <option value="8">Athlone Institute of Technology</option>
                <option value="9">Bamberg Üniversitesi</option>
                <option value="10">Bergen Üniversitesi</option>
                <option value="11">Bocconi University</option>
                <option value="12">Bournemouth University</option>
                <option value="13">Ca Foscari University of Venice</option>
                <option value="14">Cadiz Üniversitesi</option>
                <option value="15">Corvinus University of Budapest</option>
                <option value="16">Cracow University of Economics</option>
                <option value="17">Eberhard Karls Universitat Tübingen</option>
                <option value="18">École Polytechnique Fédérale (EPF)</option>
                <option value="19">EDHEC Business School</option>
                <option value="20">Erasmus Universiteit Rotterdam</option>
                <option value="21">Erfurt Üniversitesi</option>
                <option value="22">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="23">ESIEE Paris</option>
                <option value="24">Eszterhazy Karoly Foiskola</option>
                <option value="25">Free University of Bozen/Bolzano</option>
                <option value="26">Friedrich-Alexander-Universitat Erlangen-Nürnberg</option>
                <option value="27">Ghent Üniversitesi</option>
                <option value="28">Göteborg Üniversitesi</option>
                <option value="29">Groningen Üniversitesi</option>
                <option value="30">Hanzehogeschool Groningen</option>
                <option value="31">Helsinki Metropolia University of Applied Sciences</option>
                <option value="32">HOCHSCHULE FÜR MUSIK UND THEATER HANNOVER</option>
                <option value="33">Hogeschool INHolland</option>
                <option value="34">Huelva University</option>
                <option value="35">IBS - International Business School</option>
                <option value="36">ICHEC Brussels Management School</option>
                <option value="37">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="38">ISCTE IUL - Lisbon University Institute</option>
                <option value="39">Johann Wolfgang Goethe University</option>
                <option value="40">Katholieke Universiteit Leuven</option>
                <option value="41">Kaunas Teknoloji Üniversitesi</option>
                <option value="42">Kedge Business School</option>
                <option value="43">Kiel University</option>
                <option value="44">Kingston University</option>
                <option value="45">Konstanz University</option>
                <option value="46">Leiden Üniversitesi</option>
                <option value="47">Leipzig Üniversitesi</option>
                <option value="48">Leuphana Universitat Lüneburg</option>
                <option value="49">Liege Üniversitesi</option>
                <option value="50">Ljubljana Üniversitesi</option>
                <option value="51">London Metropolitan University</option>
                <option value="52">Maastricht University</option>
                <option value="53">Malmö Üniversitesi</option>
                <option value="54">Mannheim Üniversitesi</option>
                <option value="55">Masaryk Üniversitesi</option>
                <option value="56">Minho Üniversitesi</option>
                <option value="57">Neoma Business School</option>
                <option value="58">NHTV Breda University of Applied Sciences</option>
                <option value="59">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="60">Pforzheim University</option>
                <option value="61">Politechnika Gdanska</option>
                <option value="62">Politecnico di Milano</option>
                <option value="63">Polytechnic of Bari</option>
                <option value="64">Prag Sahne Sanatlar Akademisi</option>
                <option value="65">Prag'daki Charles Üniversitesi</option>
                <option value="66">Radboud University Nijmegen</option>
                <option value="67">RISEBA</option>
                <option value="68">Roskilde Universitesi</option>
                <option value="69">Ruhr-Universitat Bochum</option>
                <option value="70">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="71">Saarland Üniversitesi</option>
                <option value="72">Sciences Po</option>
                <option value="73">Sheffield Üniversitesi</option>
                <option value="74">Strasbourg Üniversitesi</option>
                <option value="75">SZENT ISTVAN UNIVERSITY</option>
                <option value="76">Tartu Üniversitesi</option>
                <option value="77">Technical University of Berlin</option>
                <option value="78">Technische Universiteti Eindhoven</option>
                <option value="79">TELECOM SudParis</option>
                <option value="80">TU Universitaet Dortmund</option>
                <option value="81">TU Vienna</option>
                <option value="82">Turku Üniversitesi</option>
                <option value="83">Universidad de Castilla-La Mancha</option>
                <option value="84">Universidad Pontificia Comillas de Madrid</option>
                <option value="85">Universidade Catolica Portuguesa</option>
                <option value="86">Universidade do Porto</option>
                <option value="87">Universidade Nova de Lisboa</option>
                <option value="88">Universita degli Studi di Firenze</option>
                <option value="89">Universita degli Studi di L&#039;Aquila</option>
                <option value="90">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="91">Universita degli Studi di Perugia</option>
                <option value="92">Universitaet Bayreuth</option>
                <option value="93">Universitat Autonoma de Barcelona</option>
                <option value="94">Universitat de Barcelona</option>
                <option value="95">Universität Luzern</option>
                <option value="96">Université Catholique de Lille (IESEG)</option>
                <option value="97">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="98">Université de Bretagne Occidentale</option>
                <option value="99">Universite Paris-Dauphine</option>
                <option value="100">Universiteit Van Tilburg</option>
                <option value="101">University of Applied Sciences Upper Austria</option>
                <option value="102">University of Bologna</option>
                <option value="103">University of Deusto</option>
                <option value="104">University of Dundee</option>
                <option value="105">University of Edinburgh</option>
                <option value="106">University of Limerick</option>
                <option value="107">University of Münster</option>
                <option value="108">University of Southern Denmark</option>
                <option value="109">University of Twente</option>
                <option value="110">Univerversité Saint-Louis</option>
                <option value="111">UNIWERSYTET SZCZECINSKI</option>
                <option value="112">Utrecht Üniversitesi</option>
                <option value="113">Varşova Üniversitesi</option>
                <option value="114">Vilnius Üniversitesi</option>
                <option value="115">Vrije Üniversitesi</option>
                <option value="116">Warsaw School of Economics</option>
                <option value="117">Waterford Institute of Technology</option>
                <option value="118">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>3.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 3">
                <option>Select</option>
                <option value="1">Aberystwyth University</option>
                <option value="2">Adam Mickiewicz Universitesi</option>
                <option value="3">AGH University of Science and Technology</option>
                <option value="4">Akademia Sztuk Pięknych w Gdańsku</option>
                <option value="5">Amsterdam University College</option>
                <option value="6">Architectural Institution in Prague</option>
                <option value="7">Aston University</option>
                <option value="8">Athlone Institute of Technology</option>
                <option value="9">Bamberg Üniversitesi</option>
                <option value="10">Bergen Üniversitesi</option>
                <option value="11">Bocconi University</option>
                <option value="12">Bournemouth University</option>
                <option value="13">Ca Foscari University of Venice</option>
                <option value="14">Cadiz Üniversitesi</option>
                <option value="15">Corvinus University of Budapest</option>
                <option value="16">Cracow University of Economics</option>
                <option value="17">Eberhard Karls Universitat Tübingen</option>
                <option value="18">École Polytechnique Fédérale (EPF)</option>
                <option value="19">EDHEC Business School</option>
                <option value="20">Erasmus Universiteit Rotterdam</option>
                <option value="21">Erfurt Üniversitesi</option>
                <option value="22">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="23">ESIEE Paris</option>
                <option value="24">Eszterhazy Karoly Foiskola</option>
                <option value="25">Free University of Bozen/Bolzano</option>
                <option value="26">Friedrich-Alexander-Universitat Erlangen-Nürnberg</option>
                <option value="27">Ghent Üniversitesi</option>
                <option value="28">Göteborg Üniversitesi</option>
                <option value="29">Groningen Üniversitesi</option>
                <option value="30">Hanzehogeschool Groningen</option>
                <option value="31">Helsinki Metropolia University of Applied Sciences</option>
                <option value="32">HOCHSCHULE FÜR MUSIK UND THEATER HANNOVER</option>
                <option value="33">Hogeschool INHolland</option>
                <option value="34">Huelva University</option>
                <option value="35">IBS - International Business School</option>
                <option value="36">ICHEC Brussels Management School</option>
                <option value="37">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="38">ISCTE IUL - Lisbon University Institute</option>
                <option value="39">Johann Wolfgang Goethe University</option>
                <option value="40">Katholieke Universiteit Leuven</option>
                <option value="41">Kaunas Teknoloji Üniversitesi</option>
                <option value="42">Kedge Business School</option>
                <option value="43">Kiel University</option>
                <option value="44">Kingston University</option>
                <option value="45">Konstanz University</option>
                <option value="46">Leiden Üniversitesi</option>
                <option value="47">Leipzig Üniversitesi</option>
                <option value="48">Leuphana Universitat Lüneburg</option>
                <option value="49">Liege Üniversitesi</option>
                <option value="50">Ljubljana Üniversitesi</option>
                <option value="51">London Metropolitan University</option>
                <option value="52">Maastricht University</option>
                <option value="53">Malmö Üniversitesi</option>
                <option value="54">Mannheim Üniversitesi</option>
                <option value="55">Masaryk Üniversitesi</option>
                <option value="56">Minho Üniversitesi</option>
                <option value="57">Neoma Business School</option>
                <option value="58">NHTV Breda University of Applied Sciences</option>
                <option value="59">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="60">Pforzheim University</option>
                <option value="61">Politechnika Gdanska</option>
                <option value="62">Politecnico di Milano</option>
                <option value="63">Polytechnic of Bari</option>
                <option value="64">Prag Sahne Sanatlar Akademisi</option>
                <option value="65">Prag'daki Charles Üniversitesi</option>
                <option value="66">Radboud University Nijmegen</option>
                <option value="67">RISEBA</option>
                <option value="68">Roskilde Universitesi</option>
                <option value="69">Ruhr-Universitat Bochum</option>
                <option value="70">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="71">Saarland Üniversitesi</option>
                <option value="72">Sciences Po</option>
                <option value="73">Sheffield Üniversitesi</option>
                <option value="74">Strasbourg Üniversitesi</option>
                <option value="75">SZENT ISTVAN UNIVERSITY</option>
                <option value="76">Tartu Üniversitesi</option>
                <option value="77">Technical University of Berlin</option>
                <option value="78">Technische Universiteti Eindhoven</option>
                <option value="79">TELECOM SudParis</option>
                <option value="80">TU Universitaet Dortmund</option>
                <option value="81">TU Vienna</option>
                <option value="82">Turku Üniversitesi</option>
                <option value="83">Universidad de Castilla-La Mancha</option>
                <option value="84">Universidad Pontificia Comillas de Madrid</option>
                <option value="85">Universidade Catolica Portuguesa</option>
                <option value="86">Universidade do Porto</option>
                <option value="87">Universidade Nova de Lisboa</option>
                <option value="88">Universita degli Studi di Firenze</option>
                <option value="89">Universita degli Studi di L&#039;Aquila</option>
                <option value="90">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="91">Universita degli Studi di Perugia</option>
                <option value="92">Universitaet Bayreuth</option>
                <option value="93">Universitat Autonoma de Barcelona</option>
                <option value="94">Universitat de Barcelona</option>
                <option value="95">Universität Luzern</option>
                <option value="96">Université Catholique de Lille (IESEG)</option>
                <option value="97">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="98">Université de Bretagne Occidentale</option>
                <option value="99">Universite Paris-Dauphine</option>
                <option value="100">Universiteit Van Tilburg</option>
                <option value="101">University of Applied Sciences Upper Austria</option>
                <option value="102">University of Bologna</option>
                <option value="103">University of Deusto</option>
                <option value="104">University of Dundee</option>
                <option value="105">University of Edinburgh</option>
                <option value="106">University of Limerick</option>
                <option value="107">University of Münster</option>
                <option value="108">University of Southern Denmark</option>
                <option value="109">University of Twente</option>
                <option value="110">Univerversité Saint-Louis</option>
                <option value="111">UNIWERSYTET SZCZECINSKI</option>
                <option value="112">Utrecht Üniversitesi</option>
                <option value="113">Varşova Üniversitesi</option>
                <option value="114">Vilnius Üniversitesi</option>
                <option value="115">Vrije Üniversitesi</option>
                <option value="116">Warsaw School of Economics</option>
                <option value="117">Waterford Institute of Technology</option>
                <option value="118">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>4.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 4">
                <option>Select</option>
                <option value="1">Aberystwyth University</option>
                <option value="2">Adam Mickiewicz Universitesi</option>
                <option value="3">AGH University of Science and Technology</option>
                <option value="4">Akademia Sztuk Pięknych w Gdańsku</option>
                <option value="5">Amsterdam University College</option>
                <option value="6">Architectural Institution in Prague</option>
                <option value="7">Aston University</option>
                <option value="8">Athlone Institute of Technology</option>
                <option value="9">Bamberg Üniversitesi</option>
                <option value="10">Bergen Üniversitesi</option>
                <option value="11">Bocconi University</option>
                <option value="12">Bournemouth University</option>
                <option value="13">Ca Foscari University of Venice</option>
                <option value="14">Cadiz Üniversitesi</option>
                <option value="15">Corvinus University of Budapest</option>
                <option value="16">Cracow University of Economics</option>
                <option value="17">Eberhard Karls Universitat Tübingen</option>
                <option value="18">École Polytechnique Fédérale (EPF)</option>
                <option value="19">EDHEC Business School</option>
                <option value="20">Erasmus Universiteit Rotterdam</option>
                <option value="21">Erfurt Üniversitesi</option>
                <option value="22">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="23">ESIEE Paris</option>
                <option value="24">Eszterhazy Karoly Foiskola</option>
                <option value="25">Free University of Bozen/Bolzano</option>
                <option value="26">Friedrich-Alexander-Universitat Erlangen-Nürnberg</option>
                <option value="27">Ghent Üniversitesi</option>
                <option value="28">Göteborg Üniversitesi</option>
                <option value="29">Groningen Üniversitesi</option>
                <option value="30">Hanzehogeschool Groningen</option>
                <option value="31">Helsinki Metropolia University of Applied Sciences</option>
                <option value="32">HOCHSCHULE FÜR MUSIK UND THEATER HANNOVER</option>
                <option value="33">Hogeschool INHolland</option>
                <option value="34">Huelva University</option>
                <option value="35">IBS - International Business School</option>
                <option value="36">ICHEC Brussels Management School</option>
                <option value="37">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="38">ISCTE IUL - Lisbon University Institute</option>
                <option value="39">Johann Wolfgang Goethe University</option>
                <option value="40">Katholieke Universiteit Leuven</option>
                <option value="41">Kaunas Teknoloji Üniversitesi</option>
                <option value="42">Kedge Business School</option>
                <option value="43">Kiel University</option>
                <option value="44">Kingston University</option>
                <option value="45">Konstanz University</option>
                <option value="46">Leiden Üniversitesi</option>
                <option value="47">Leipzig Üniversitesi</option>
                <option value="48">Leuphana Universitat Lüneburg</option>
                <option value="49">Liege Üniversitesi</option>
                <option value="50">Ljubljana Üniversitesi</option>
                <option value="51">London Metropolitan University</option>
                <option value="52">Maastricht University</option>
                <option value="53">Malmö Üniversitesi</option>
                <option value="54">Mannheim Üniversitesi</option>
                <option value="55">Masaryk Üniversitesi</option>
                <option value="56">Minho Üniversitesi</option>
                <option value="57">Neoma Business School</option>
                <option value="58">NHTV Breda University of Applied Sciences</option>
                <option value="59">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="60">Pforzheim University</option>
                <option value="61">Politechnika Gdanska</option>
                <option value="62">Politecnico di Milano</option>
                <option value="63">Polytechnic of Bari</option>
                <option value="64">Prag Sahne Sanatlar Akademisi</option>
                <option value="65">Prag'daki Charles Üniversitesi</option>
                <option value="66">Radboud University Nijmegen</option>
                <option value="67">RISEBA</option>
                <option value="68">Roskilde Universitesi</option>
                <option value="69">Ruhr-Universitat Bochum</option>
                <option value="70">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="71">Saarland Üniversitesi</option>
                <option value="72">Sciences Po</option>
                <option value="73">Sheffield Üniversitesi</option>
                <option value="74">Strasbourg Üniversitesi</option>
                <option value="75">SZENT ISTVAN UNIVERSITY</option>
                <option value="76">Tartu Üniversitesi</option>
                <option value="77">Technical University of Berlin</option>
                <option value="78">Technische Universiteti Eindhoven</option>
                <option value="79">TELECOM SudParis</option>
                <option value="80">TU Universitaet Dortmund</option>
                <option value="81">TU Vienna</option>
                <option value="82">Turku Üniversitesi</option>
                <option value="83">Universidad de Castilla-La Mancha</option>
                <option value="84">Universidad Pontificia Comillas de Madrid</option>
                <option value="85">Universidade Catolica Portuguesa</option>
                <option value="86">Universidade do Porto</option>
                <option value="87">Universidade Nova de Lisboa</option>
                <option value="88">Universita degli Studi di Firenze</option>
                <option value="89">Universita degli Studi di L&#039;Aquila</option>
                <option value="90">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="91">Universita degli Studi di Perugia</option>
                <option value="92">Universitaet Bayreuth</option>
                <option value="93">Universitat Autonoma de Barcelona</option>
                <option value="94">Universitat de Barcelona</option>
                <option value="95">Universität Luzern</option>
                <option value="96">Université Catholique de Lille (IESEG)</option>
                <option value="97">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="98">Université de Bretagne Occidentale</option>
                <option value="99">Universite Paris-Dauphine</option>
                <option value="100">Universiteit Van Tilburg</option>
                <option value="101">University of Applied Sciences Upper Austria</option>
                <option value="102">University of Bologna</option>
                <option value="103">University of Deusto</option>
                <option value="104">University of Dundee</option>
                <option value="105">University of Edinburgh</option>
                <option value="106">University of Limerick</option>
                <option value="107">University of Münster</option>
                <option value="108">University of Southern Denmark</option>
                <option value="109">University of Twente</option>
                <option value="110">Univerversité Saint-Louis</option>
                <option value="111">UNIWERSYTET SZCZECINSKI</option>
                <option value="112">Utrecht Üniversitesi</option>
                <option value="113">Varşova Üniversitesi</option>
                <option value="114">Vilnius Üniversitesi</option>
                <option value="115">Vrije Üniversitesi</option>
                <option value="116">Warsaw School of Economics</option>
                <option value="117">Waterford Institute of Technology</option>
                <option value="118">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>5.</Form.Label>
              </Form.Group>
              <Form.Select aria-label="University Selection 5">
                <option>Select</option>
                <option value="1">Aberystwyth University</option>
                <option value="2">Adam Mickiewicz Universitesi</option>
                <option value="3">AGH University of Science and Technology</option>
                <option value="4">Akademia Sztuk Pięknych w Gdańsku</option>
                <option value="5">Amsterdam University College</option>
                <option value="6">Architectural Institution in Prague</option>
                <option value="7">Aston University</option>
                <option value="8">Athlone Institute of Technology</option>
                <option value="9">Bamberg Üniversitesi</option>
                <option value="10">Bergen Üniversitesi</option>
                <option value="11">Bocconi University</option>
                <option value="12">Bournemouth University</option>
                <option value="13">Ca Foscari University of Venice</option>
                <option value="14">Cadiz Üniversitesi</option>
                <option value="15">Corvinus University of Budapest</option>
                <option value="16">Cracow University of Economics</option>
                <option value="17">Eberhard Karls Universitat Tübingen</option>
                <option value="18">École Polytechnique Fédérale (EPF)</option>
                <option value="19">EDHEC Business School</option>
                <option value="20">Erasmus Universiteit Rotterdam</option>
                <option value="21">Erfurt Üniversitesi</option>
                <option value="22">ESIEA (Ecole Superieure d&#039;Informatique, Electronique et Automatique)</option>
                <option value="23">ESIEE Paris</option>
                <option value="24">Eszterhazy Karoly Foiskola</option>
                <option value="25">Free University of Bozen/Bolzano</option>
                <option value="26">Friedrich-Alexander-Universitat Erlangen-Nürnberg</option>
                <option value="27">Ghent Üniversitesi</option>
                <option value="28">Göteborg Üniversitesi</option>
                <option value="29">Groningen Üniversitesi</option>
                <option value="30">Hanzehogeschool Groningen</option>
                <option value="31">Helsinki Metropolia University of Applied Sciences</option>
                <option value="32">HOCHSCHULE FÜR MUSIK UND THEATER HANNOVER</option>
                <option value="33">Hogeschool INHolland</option>
                <option value="34">Huelva University</option>
                <option value="35">IBS - International Business School</option>
                <option value="36">ICHEC Brussels Management School</option>
                <option value="37">Institut Superieur de Traducteurs et Interpretes</option>
                <option value="38">ISCTE IUL - Lisbon University Institute</option>
                <option value="39">Johann Wolfgang Goethe University</option>
                <option value="40">Katholieke Universiteit Leuven</option>
                <option value="41">Kaunas Teknoloji Üniversitesi</option>
                <option value="42">Kedge Business School</option>
                <option value="43">Kiel University</option>
                <option value="44">Kingston University</option>
                <option value="45">Konstanz University</option>
                <option value="46">Leiden Üniversitesi</option>
                <option value="47">Leipzig Üniversitesi</option>
                <option value="48">Leuphana Universitat Lüneburg</option>
                <option value="49">Liege Üniversitesi</option>
                <option value="50">Ljubljana Üniversitesi</option>
                <option value="51">London Metropolitan University</option>
                <option value="52">Maastricht University</option>
                <option value="53">Malmö Üniversitesi</option>
                <option value="54">Mannheim Üniversitesi</option>
                <option value="55">Masaryk Üniversitesi</option>
                <option value="56">Minho Üniversitesi</option>
                <option value="57">Neoma Business School</option>
                <option value="58">NHTV Breda University of Applied Sciences</option>
                <option value="59">Otto-von-Guericke Universitat Magdeburg</option>
                <option value="60">Pforzheim University</option>
                <option value="61">Politechnika Gdanska</option>
                <option value="62">Politecnico di Milano</option>
                <option value="63">Polytechnic of Bari</option>
                <option value="64">Prag Sahne Sanatlar Akademisi</option>
                <option value="65">Prag'daki Charles Üniversitesi</option>
                <option value="66">Radboud University Nijmegen</option>
                <option value="67">RISEBA</option>
                <option value="68">Roskilde Universitesi</option>
                <option value="69">Ruhr-Universitat Bochum</option>
                <option value="70">Ruprecht-Karls Universitat Heidelberg</option>
                <option value="71">Saarland Üniversitesi</option>
                <option value="72">Sciences Po</option>
                <option value="73">Sheffield Üniversitesi</option>
                <option value="74">Strasbourg Üniversitesi</option>
                <option value="75">SZENT ISTVAN UNIVERSITY</option>
                <option value="76">Tartu Üniversitesi</option>
                <option value="77">Technical University of Berlin</option>
                <option value="78">Technische Universiteti Eindhoven</option>
                <option value="79">TELECOM SudParis</option>
                <option value="80">TU Universitaet Dortmund</option>
                <option value="81">TU Vienna</option>
                <option value="82">Turku Üniversitesi</option>
                <option value="83">Universidad de Castilla-La Mancha</option>
                <option value="84">Universidad Pontificia Comillas de Madrid</option>
                <option value="85">Universidade Catolica Portuguesa</option>
                <option value="86">Universidade do Porto</option>
                <option value="87">Universidade Nova de Lisboa</option>
                <option value="88">Universita degli Studi di Firenze</option>
                <option value="89">Universita degli Studi di L&#039;Aquila</option>
                <option value="90">UNIVERSITA DEGLI STUDI DI MODENA E REGGIO EMILIA</option>
                <option value="91">Universita degli Studi di Perugia</option>
                <option value="92">Universitaet Bayreuth</option>
                <option value="93">Universitat Autonoma de Barcelona</option>
                <option value="94">Universitat de Barcelona</option>
                <option value="95">Universität Luzern</option>
                <option value="96">Université Catholique de Lille (IESEG)</option>
                <option value="97">UNIVERSITE CATHOLIQUE DE LOUVAIN</option>
                <option value="98">Université de Bretagne Occidentale</option>
                <option value="99">Universite Paris-Dauphine</option>
                <option value="100">Universiteit Van Tilburg</option>
                <option value="101">University of Applied Sciences Upper Austria</option>
                <option value="102">University of Bologna</option>
                <option value="103">University of Deusto</option>
                <option value="104">University of Dundee</option>
                <option value="105">University of Edinburgh</option>
                <option value="106">University of Limerick</option>
                <option value="107">University of Münster</option>
                <option value="108">University of Southern Denmark</option>
                <option value="109">University of Twente</option>
                <option value="110">Univerversité Saint-Louis</option>
                <option value="111">UNIWERSYTET SZCZECINSKI</option>
                <option value="112">Utrecht Üniversitesi</option>
                <option value="113">Varşova Üniversitesi</option>
                <option value="114">Vilnius Üniversitesi</option>
                <option value="115">Vrije Üniversitesi</option>
                <option value="116">Warsaw School of Economics</option>
                <option value="117">Waterford Institute of Technology</option>
                <option value="118">WHU - Otto Beisheim School of Management</option>
              </Form.Select>
              <Form>
                <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                  <Form.Label>Preferred Semester:</Form.Label>
                  <Form.Check
                    inline
                    label="Fall"
                    name="group1"
                    type='radio'
                    id={`inline-radio-1`}
                    className="ms-1"
                  />
                  <Form.Check
                    inline
                    label="Spring"
                    name="group1"
                    type='radio'
                    id={`inline-radio-2`}
                  />
                </Form.Group>
              </Form>
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br />
            <Button style={{ backgroundColor: "#3C7479" }}>Submit</Button>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  Title,
  Column,
  CriarText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
  FinalText,
  TenhoText,
} from "../cadastro/styles";
import { IFormData } from "./types";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres!")
      .required("Campo obrigatório!"),
  })
  .required();

const Cadastro = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = () => {
    alert("Cadastro efetuado com sucesso!");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Crie sua conta e make the change._</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={onSubmit}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson color="#8647AD" />}
                name="nome"
                control={control}
              />

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
                name="email"
                control={control}
              />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock color="#8647AD" />}
                name="password"
                control={control}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <FinalText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </FinalText>
            <Row>
              <TenhoText>Já tenho conta</TenhoText>
              <CriarText onClick={handleClickSignIn}>Fazer login</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };

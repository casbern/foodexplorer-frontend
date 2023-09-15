import { Container, Wrapper, InputFile, Select } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { InputField } from "../../components/InputField"
import { Textarea } from "../../components/Textarea"
import { IngredientItem } from "../../components/IngredientItem"
import { Footer } from "../../components/Footer"

export function EditDish() {
	return (
		<Container>
			<Header />

			<Wrapper>
				<ButtonText title="voltar" />

				<h1>Editar prato</h1>
				<div className="main">
					<InputFile>
						<label>Imagem do prato</label>

						<div className="file">
							<svg
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.2929 1.21697C11.6834 0.826441 12.3166 0.826441 12.7071 1.21697L17.9571 6.46697C18.3476 6.85749 18.3476 7.49065 17.9571 7.88118C17.5666 8.2717 16.9334 8.2717 16.5429 7.88118L12 3.33829L7.45711 7.88118C7.06658 8.2717 6.43342 8.2717 6.04289 7.88118C5.65237 7.49065 5.65237 6.85749 6.04289 6.46697L11.2929 1.21697Z"
									fill="white"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 0.924072C12.5523 0.924072 13 1.37179 13 1.92407V15.9241C13 16.4764 12.5523 16.9241 12 16.9241C11.4477 16.9241 11 16.4764 11 15.9241V1.92407C11 1.37179 11.4477 0.924072 12 0.924072Z"
									fill="white"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1 14.9241C1.55228 14.9241 2 15.3718 2 15.9241V22.9241H22V15.9241C22 15.3718 22.4477 14.9241 23 14.9241C23.5523 14.9241 24 15.3718 24 15.9241V22.9241C24 23.4545 23.7893 23.9632 23.4142 24.3383C23.0391 24.7134 22.5304 24.9241 22 24.9241H2C1.46957 24.9241 0.960861 24.7134 0.585787 24.3383C0.210714 23.9632 0 23.4545 0 22.9241V15.9241C0 15.3718 0.447715 14.9241 1 14.9241Z"
									fill="white"
								/>
							</svg>

							<span>Selecione a imagem</span>

							<input type="file" />
						</div>
					</InputFile>

					<InputField
						label="Nome"
						placeholder="Ex.: Salada Ceasar"
						type="text"
						className="name"
					/>

					<div className="categories">
						<label>Categoria</label>
						<Select name="categorias" id="categorias>">
							<option value="refeicoes">Refeições</option>
							<option value="pratos_principais">Pratos Principais</option>
							<option value="sobremesas">Sobremesas</option>
							<option value="bebidas">Bebidas</option>
						</Select>
					</div>

					<div className="ingredients">
						<label>Ingredientes</label>
						<div className="ingredients-items">
							<IngredientItem value="Pão Naan" />
							<IngredientItem $isNew placeholder="Adicionar" />
						</div>
					</div>

					<InputField
						label="Preço"
						placeholder="R$ 00,00"
						type="number"
						className="price"
					/>

					<div className="description">
						<label>Descrição</label>
						<Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."></Textarea>
					</div>

					<div className="buttons">
						<Button title="Excluir prato" className="btn-delete" />
						<Button title="Salvar" className="btn-save" />
					</div>
				</div>
			</Wrapper>

			<Footer />
		</Container>
	)
}
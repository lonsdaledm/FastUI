/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify python types, then run
 * `fastui generate <python-object> <typescript-output-file>`.
 */

export type FastProps =
  | Text
  | Paragraph
  | PageTitle
  | Div
  | Page
  | Heading
  | Markdown
  | Code
  | Json
  | Button
  | Link
  | LinkList
  | Navbar
  | Footer
  | Modal
  | ServerLoad
  | Image
  | Iframe
  | Video
  | FireEvent
  | Error
  | Spinner
  | Custom
  | Table
  | Pagination
  | Display
  | Details
  | Form
  | FormFieldInput
  | FormFieldTextarea
  | FormFieldBoolean
  | FormFieldFile
  | FormFieldSelect
  | FormFieldSelectSearch
  | ModelForm
  | Toast
export type ClassName =
  | string
  | ClassName[]
  | {
      [k: string]: boolean
    }
export type JsonData =
  | string
  | number
  | boolean
  | null
  | JsonData[]
  | {
      [k: string]: JsonData
    }
export type AnyEvent = PageEvent | GoToEvent | BackEvent | AuthEvent
export type NamedStyle = 'primary' | 'secondary' | 'warning'
/**
 * Display mode for a value.
 */
export type DisplayMode =
  | 'auto'
  | 'plain'
  | 'datetime'
  | 'date'
  | 'duration'
  | 'as_title'
  | 'markdown'
  | 'json'
  | 'inline_code'
export type SelectOptions = SelectOption[] | SelectGroup[]

/**
 * Text component that displays a string.
 */
export interface Text {
  text: string
  type: 'Text'
}
/**
 * Paragraph component that displays a string as a paragraph.
 */
export interface Paragraph {
  text: string
  className?: ClassName
  type: 'Paragraph'
}
/**
 * Sets the title of the HTML page via the `document.title` property.
 */
export interface PageTitle {
  text: string
  type: 'PageTitle'
}
/**
 * A generic container component.
 */
export interface Div {
  components: FastProps[]
  className?: ClassName
  type: 'Div'
}
/**
 * Similar to `container` in many UI frameworks, this acts as a root component for most pages.
 */
export interface Page {
  components: FastProps[]
  className?: ClassName
  type: 'Page'
}
/**
 * Heading component.
 */
export interface Heading {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  htmlId?: string
  className?: ClassName
  type: 'Heading'
}
/**
 * Markdown component that renders markdown text.
 */
export interface Markdown {
  text: string
  codeStyle?: string
  className?: ClassName
  type: 'Markdown'
}
/**
 * Code component that renders code with syntax highlighting.
 */
export interface Code {
  text: string
  language?: string
  codeStyle?: string
  className?: ClassName
  type: 'Code'
}
/**
 * JSON component that renders JSON data.
 */
export interface Json {
  value: JsonData
  className?: ClassName
  type: 'JSON'
}
/**
 * Button component.
 */
export interface Button {
  text: string
  onClick?: AnyEvent
  htmlType?: 'button' | 'reset' | 'submit'
  namedStyle?: NamedStyle
  className?: ClassName
  type: 'Button'
}
export interface PageEvent {
  name: string
  pushPath?: string
  context?: ContextType
  clear?: boolean
  nextEvent?: PageEvent | GoToEvent | BackEvent | AuthEvent
  type: 'page'
}
export interface ContextType {
  [k: string]: string | number
}
export interface GoToEvent {
  url?: string
  query?: {
    [k: string]: string | number
  }
  target?: '_blank'
  type: 'go-to'
}
export interface BackEvent {
  type: 'back'
}
export interface AuthEvent {
  token: string | false
  url?: string
  type: 'auth'
}
/**
 * Link component.
 */
export interface Link {
  components: FastProps[]
  onClick?: PageEvent | GoToEvent | BackEvent | AuthEvent
  mode?: 'navbar' | 'footer' | 'tabs' | 'vertical' | 'pagination'
  active?: string | boolean
  locked?: boolean
  className?: ClassName
  type: 'Link'
}
/**
 * List of Link components.
 */
export interface LinkList {
  links: Link[]
  mode?: 'tabs' | 'vertical' | 'pagination'
  className?: ClassName
  type: 'LinkList'
}
/**
 * Navbar component used for moving between pages.
 */
export interface Navbar {
  title?: string
  titleEvent?: PageEvent | GoToEvent | BackEvent | AuthEvent
  startLinks: Link[]
  endLinks: Link[]
  className?: ClassName
  type: 'Navbar'
}
/**
 * Footer component.
 */
export interface Footer {
  links: Link[]
  extraText?: string
  className?: ClassName
  type: 'Footer'
}
/**
 * Modal component that displays a modal dialog.
 */
export interface Modal {
  title: string
  body: FastProps[]
  footer?: FastProps[]
  openTrigger?: PageEvent
  openContext?: ContextType
  className?: ClassName
  type: 'Modal'
}
/**
 * A component that will be replaced by the server with the component returned by the given URL.
 */
export interface ServerLoad {
  path: string
  loadTrigger?: PageEvent
  components?: FastProps[]
  sse?: boolean
  sseRetry?: number
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  type: 'ServerLoad'
}
/**
 * Image container component.
 */
export interface Image {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  loading?: 'eager' | 'lazy'
  onClick?: AnyEvent
  className?: ClassName
  type: 'Image'
}
/**
 * Iframe component that displays content from a URL.
 */
export interface Iframe {
  src: string
  title?: string
  width?: string | number
  height?: string | number
  className?: ClassName
  srcdoc?: string
  sandbox?: string
  type: 'Iframe'
}
/**
 * Video component that displays a video or multiple videos.
 */
export interface Video {
  sources: string[]
  autoplay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  poster?: string
  width?: string | number
  height?: string | number
  className?: ClassName
  type: 'Video'
}
/**
 * Fire an event.
 */
export interface FireEvent {
  event: AnyEvent
  message?: string
  type: 'FireEvent'
}
/**
 * Utility component used to display an error.
 */
export interface Error {
  title: string
  description: string
  statusCode?: number
  className?: ClassName
  type: 'Error'
  children?: ReactNode
}
/**
 * Spinner component that displays a loading spinner.
 */
export interface Spinner {
  text?: string
  className?: ClassName
  type: 'Spinner'
}
/**
 * Custom component that allows for special data to be rendered.
 */
export interface Custom {
  data: JsonData
  subType: string
  library?: string
  className?: ClassName
  type: 'Custom'
}
/**
 * Table component.
 */
export interface Table {
  data: DataModel[]
  columns: DisplayLookup[]
  noDataMessage?: string
  className?: ClassName
  type: 'Table'
}
export interface DataModel {
  [k: string]: JsonData
}
/**
 * Description of how to display a value looked up from data, either in a table or detail view.
 */
export interface DisplayLookup {
  mode?: DisplayMode
  title?: string
  onClick?: PageEvent | GoToEvent | BackEvent | AuthEvent
  field: string
  tableWidthPercent?: number
}
/**
 * Pagination component to use with tables.
 */
export interface Pagination {
  page: number
  pageSize: number
  total: number
  pageQueryParam?: string
  className?: ClassName
  type: 'Pagination'
  pageCount: number
}
/**
 * Description of how to display a value, either in a table or detail view.
 */
export interface Display {
  mode?: DisplayMode
  title?: string
  onClick?: PageEvent | GoToEvent | BackEvent | AuthEvent
  value: JsonData
  type: 'Display'
}
/**
 * Details associated with displaying a data model.
 */
export interface Details {
  data: DataModel
  fields: (DisplayLookup | Display)[]
  className?: ClassName
  type: 'Details'
}
/**
 * Form component.
 */
export interface Form {
  submitUrl: string
  initial?: {
    [k: string]: JsonData
  }
  method?: 'POST' | 'GOTO' | 'GET'
  displayMode?: 'default' | 'page' | 'inline'
  submitOnChange?: boolean
  submitTrigger?: PageEvent
  loading?: FastProps[]
  footer?: FastProps[]
  className?: ClassName
  formFields: (
    | FormFieldInput
    | FormFieldTextarea
    | FormFieldBoolean
    | FormFieldFile
    | FormFieldSelect
    | FormFieldSelectSearch
  )[]
  type: 'Form'
}
/**
 * Form field for basic input.
 */
export interface FormFieldInput {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  htmlType?: 'text' | 'date' | 'datetime-local' | 'time' | 'email' | 'url' | 'number' | 'password' | 'hidden'
  initial?: string | number
  placeholder?: string
  autocomplete?: string
  step?: number | 'any'
  type: 'FormFieldInput'
}
/**
 * Form field for text area input.
 */
export interface FormFieldTextarea {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  rows?: number
  cols?: number
  initial?: string
  placeholder?: string
  autocomplete?: string
  type: 'FormFieldTextarea'
}
/**
 * Form field for boolean input.
 */
export interface FormFieldBoolean {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  initial?: boolean
  mode?: 'checkbox' | 'switch'
  type: 'FormFieldBoolean'
}
/**
 * Form field for file input.
 */
export interface FormFieldFile {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  multiple?: boolean
  accept?: string
  type: 'FormFieldFile'
}
/**
 * Form field for select input.
 */
export interface FormFieldSelect {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  options: SelectOptions
  multiple?: boolean
  initial?: string[] | string
  vanilla?: boolean
  placeholder?: string
  autocomplete?: string
  type: 'FormFieldSelect'
}
export interface SelectOption {
  value: string
  label: string
}
export interface SelectGroup {
  label: string
  options: SelectOption[]
}
/**
 * Form field for searchable select input.
 */
export interface FormFieldSelectSearch {
  name: string
  title: string[] | string
  required?: boolean
  error?: string
  locked?: boolean
  description?: string
  displayMode?: 'default' | 'inline'
  className?: ClassName
  searchUrl: string
  multiple?: boolean
  initial?: SelectOption
  debounce?: number
  placeholder?: string
  type: 'FormFieldSelectSearch'
}
/**
 * Form component generated from a Pydantic model.
 */
export interface ModelForm {
  submitUrl: string
  initial?: {
    [k: string]: JsonData
  }
  method?: 'POST' | 'GOTO' | 'GET'
  displayMode?: 'default' | 'page' | 'inline'
  submitOnChange?: boolean
  submitTrigger?: PageEvent
  loading?: FastProps[]
  footer?: FastProps[]
  className?: ClassName
  type: 'ModelForm'
  formFields: (
    | FormFieldInput
    | FormFieldTextarea
    | FormFieldBoolean
    | FormFieldFile
    | FormFieldSelect
    | FormFieldSelectSearch
  )[]
}
/**
 * Toast component that displays a toast message (small temporary message).
 */
export interface Toast {
  title: string
  body: FastProps[]
  position?:
    | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'middle-start'
    | 'middle-center'
    | 'middle-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end'
  openTrigger?: PageEvent
  openContext?: ContextType
  className?: ClassName
  type: 'Toast'
}
